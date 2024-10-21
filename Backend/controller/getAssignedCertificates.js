const usermodel = require("../models/UserModel");

// Function to fetch certificates assigned to an admin
const getAssignedCertificates = async (req, res) => {
  try {
    // Assuming the admin's user ID is available in req.user (via auth middleware)
    const adminId = req.user.id; // Replace with the actual method you're using to get the user ID (e.g., from token or session)

    // Fetch the user by ID
    const admin = await usermodel.findById(adminId).select("assignedCertificates role");

    // Ensure the user exists and is an admin
    if (!admin || admin.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized. Only admins can access assigned tasks." });
    }

    // Return the assigned certificates for the admin
    res.status(200).json({
      message: "Assigned certificates fetched successfully.",
      assignedCertificates: admin.assignedCertificates,
    });
  } catch (error) {
    console.error("Error fetching assigned certificates:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = getAssignedCertificates;
