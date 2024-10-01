const UserModel = require("../models/UserModel");

const getprofile = async (req, res) => {
  try {
    // Use findOne and pass an object { email: req.user.email }
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
// const addCertificate = async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     console.log(req.files)
//     // Handle file uploads
//     const proofOfIdentityDocs = req.files['proofOfIdentity'] ? req.files['proofOfIdentity'].map(file => ({
//       filename: file.originalname,
//       path: file.path,
//       mimetype: file.mimetype,
//       size: file.size
//     })) : [];

//     const proofOfAddressDocs = req.files['proofOfAddress'] ? req.files['proofOfAddress'].map(file => ({
//       filename: file.originalname,
//       path: file.path,
//       mimetype: file.mimetype,
//       size: file.size
//     })) : [];

//     user.certificatesApplied.push({
//       certificateName: req.body.certificateName,
//       uploadedDocuments: {
//         proofOfIdentity: proofOfIdentityDocs,
//         proofOfAddress: proofOfAddressDocs
//       }
//     });

//     await user.save();
//     res.json(user);
//     console.log(user)
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

const addCertificate = async (req, res) => {
  const userId = req.params.id;

  try {
    // Fetch the user by ID
    const user = await UserModel.findById(userId);
    console.log(req.files)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Handle the uploaded files from the request
    const proofOfIdentityFiles = req.files['proofOfIdentity'];
    const proofOfAddressFiles = req.files['proofOfAddress'];

    // Build the certificate object to save into MongoDB
    const newCertificate = {
      certificateName: req.body.certificateName || "Default Certificate Name", // Or get the name from request
      status: 'pending',
      uploadedDocuments: {
        proofOfIdentity: proofOfIdentityFiles ? proofOfIdentityFiles.map(file => ({
          filename: file.filename,
          path: file.path,
          mimetype: file.mimetype,
          size: file.size
        })) : [],
        proofOfAddress: proofOfAddressFiles ? proofOfAddressFiles.map(file => ({
          filename: file.filename,
          path: file.path,
          mimetype: file.mimetype,
          size: file.size
        })) : []
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
}

module.exports = {getprofile,deleteUser,getAllUsers,getUserById ,createUser,addCertificate};
