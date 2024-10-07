
const express = require("express");
const cloudinary = require('cloudinary').v2
const { v4: uuidv4 } = require('uuid');
require("dotenv").config()
const UserController = require("../controller/UserController");
const authenticateToken = require("../middleware/AuthMiddleware");
const multer = require("multer");
const router = express.Router();
const path = require('path');
router.get('/profile',authenticateToken,UserController.getprofile);


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
});

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to store files
  },
  filename: function (req, file, cb) {

    pattern=Math.floor(1000 + Math.random() * 9000);
    cb(null, pattern+file.originalname); // Timestamp + file extension
  }
});
const upload = multer({ storage: storage });

// Define routes and map them to controller functions
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.delete('/users/:id', UserController.deleteUser);

// Add certificate with file uploads
router.post('/users/:id/certificates', upload.fields([
  { name: 'proofOfIdentity', maxCount: 2 },
  { name: 'proofOfAddress', maxCount: 2 }
]), UserController.addCertificate);


module.exports = router;