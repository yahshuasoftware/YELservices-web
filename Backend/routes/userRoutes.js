
const express = require("express");
const UserController = require("../controller/UserController");
const authenticateToken = require("../middleware/AuthMiddleware");
const multer = require("multer");
const router = express.Router();
const path = require('path')

router.get('/profile',authenticateToken,UserController.getprofile);

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to store files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Timestamp + file extension
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