const UserModel = require("../models/UserModel");
const cloudinary = require('cloudinary').v2;

// Fetch user profile by email
const getprofile = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.user.email });
    if (!user) return res.status(404).send('User not found');
    
    res.json(user); // Return the user details
  } catch (error) {
    res.status(500).send('Error fetching user profile: ' + error.message);
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a certificate to a user's profile
const addCertificate = async (req, res) => {
  const userId = req.params.id;

  try {
    // Fetch the user by ID
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Upload files to Cloudinary and retrieve their URLs
    const proofOfIdentityFiles = req.files['proofOfIdentity'] || [];
    const proofOfAddressFiles = req.files['proofOfAddress'] || [];

    const proofOfIdentityUploads = await Promise.all(
      proofOfIdentityFiles.map(async (file) => {
        const uploadResult = await cloudinary.uploader.upload(file.path); // Access the correct file path
        return {
          filename: file.filename,
          path: uploadResult.secure_url,  // Use Cloudinary URL instead of local path
          mimetype: file.mimetype,
          size: file.size
        };
      })
    );

    const proofOfAddressUploads = await Promise.all(
      proofOfAddressFiles.map(async (file) => {
        const uploadResult = await cloudinary.uploader.upload(file.path); // Access the correct file path
        return {
          filename: file.filename,
          path: uploadResult.secure_url,  // Use Cloudinary URL instead of local path
          mimetype: file.mimetype,
          size: file.size
        };
      })
    );

    // Build the certificate object to save into MongoDB
    const newCertificate = {
      certificateName: req.body.certificateName || "Default Certificate Name",
      status: 'pending',
      uploadedDocuments: {
        proofOfIdentity: proofOfIdentityUploads,
        proofOfAddress: proofOfAddressUploads,
      }
    };

    // Add the new certificate to the user's certificates array
    user.certificatesApplied.push(newCertificate);

    // Save the updated user document
    await user.save();

    // Respond with success
    res.json({ message: "Certificate added successfully", user });
  } catch (error) {
    console.error("Error adding certificate:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Controller to update the status of a certificate
const updateCertificateStatus = async (req, res) => {
  try {
    const { userId, certificateId } = req.params; // Get the user ID and certificate ID from URL
    const { status } = req.body; // Get the new status from the request body

    // Ensure the status is one of the allowed values
    const allowedStatuses = ['pending', 'approved', 'rejected'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    // Find the user by ID
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the certificate inside the user's certificatesApplied array by certificateId
    const certificate = user.certificatesApplied.id(certificateId);
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    // Update the status of the certificate
    certificate.status = status;

    // Save the updated user document
    await user.save();

    return res.status(200).json({ message: 'Certificate status updated successfully', certificate });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating certificate status', error: error.message });
  }
};

module.exports = {
  getprofile,
  deleteUser,
  getAllUsers,
  getUserById,
  createUser,
  addCertificate,
  updateCertificateStatus,
};
