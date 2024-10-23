const mongoose = require("mongoose");

// User Certificate Schema
const userCertificateSchema = new mongoose.Schema({
  certificateName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'], // Status of the certificate application
    default: 'pending',
  },
  paymentStatus: {
    type: String,
    enum: ['paid', 'unpaid', 'pending'], // Payment status for the certificate
    default: 'pending',
  },
  uploadedDocuments: {
    proofOfIdentity: [
      {
        filename: String, // Name of the file
        path: String,     // File path or URL
        mimetype: String, // MIME type (e.g., image/jpeg, application/pdf)
        size: Number,     // File size in bytes
      },
    ],
    proofOfAddress: [
      {
        filename: String, 
        path: String,
        mimetype: String,
        size: Number,
      },
    ],
  },
  revertReason: {
    type: String, // Reason for reversion
    default: '', // Will store the reason provided by admin/user
  },
  revertUploads: { // New uploads after reverting
    proofOfIdentity: [
      {
        filename: String,
        path: String,
        mimetype: String,
        size: Number,
      },
    ],
    proofOfAddress: [
      {
        filename: String,
        path: String,
        mimetype: String,
        size: Number,
      },
    ],
  },
  applicationDate: {
    type: Date,
    default: Date.now, // Automatically store the date of application
  },
});

// User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    // unique: true, // Ensure phone number is unique
    // required: true,
  },
  district: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'normal', 'superadmin'], // Roles for the user
    default: 'normal', // Default role
  },
  certificatesApplied: [userCertificateSchema], // Store details of applied certificates  

  assignedCertificates: [userCertificateSchema],
});

// Create User Model
const usermodel = mongoose.model("User", UserSchema);

module.exports = usermodel;
