const mongoose = require("mongoose");

const userCertificateSchema = new mongoose.Schema({
  certificateName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'], // Status of the certificate application
    default: 'pending'
  },
  uploadedDocuments: {
    proofOfIdentity: {
      type: [String], // Array of links to uploaded identity documents
      required: true
    },
    proofOfAddress: {
      type: [String], // Array of links to uploaded address documents
      required: true
    }
  },
  applicationDate: {
    type: Date,
    default: Date.now // Automatically store the date of application
  }
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  district: {
    type: String
  },
  certificatesApplied: [userCertificateSchema] // Store details of applied certificates
});

const usermodel = mongoose.model("user", UserSchema);

module.exports = usermodel;
