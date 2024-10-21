const express = require("express");
const getAssignedCertificates = require("../controller/getAssignedCertificates");
// If you use authentication, ensure the auth middleware is applied, or remove it if not needed
const authMiddleware = require("../middleware/AuthMiddleware"); // Optional: middleware to authenticate the user

const router = express.Router();

// Route to fetch assigned certificates for an admin
router.get("/admin/assigned-certificates", authMiddleware, getAssignedCertificates);

module.exports = router;
