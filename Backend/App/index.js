const express = require('express');
const router = express.Router();

const servicesroutes = require('../routes/ServicesRoutes');
const authroutes = require("../routes/authRoutes");
const userroutes = require("../routes/userRoutes");
const departmentRoutes = require("../routes/departmentRoutes");
const paymentRoutes = require("../routes/PaymentRoutes");
const superAdminRoutes = require("../routes/SuperAdminRoutes");

router.use("/api", servicesroutes);
router.use("/api", authroutes);
router.use("/api", userroutes);
router.use('/api', departmentRoutes);
router.use('/api/payment', paymentRoutes);
router.use("/api", superAdminRoutes);

module.exports = router;
