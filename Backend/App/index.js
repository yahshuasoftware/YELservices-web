
const express = require('express');
const router = express.Router();

const servicesroutes = require('../routes/ServicesRoutes');
const authroutes = require("../routes/authRoutes");
const userroutes=require("../routes/userRoutes")
const departmentRoutes=require("../routes/departmentRoutes")


router.use("/api", servicesroutes);
router.use("/api", authroutes);
router.use("/api", userroutes);
router.use('/api', departmentRoutes);


module.exports = router;