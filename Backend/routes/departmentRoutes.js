// routes/departmentRoutes.js
const express = require('express');
const router = express.Router();
const { addDepartment, getDepartments, addCertificates } = require('../controller/DepartmentController');


// Route to add a new department
router.post('/departments', addDepartment);

// Route to get all departments
router.get('/departments', getDepartments);

// Route to add certificates to an existing department
router.post('/departments/add-certificates', addCertificates);

module.exports = router;
