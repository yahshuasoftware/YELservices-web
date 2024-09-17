const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  
  description: {
    type: String,
    required: false
  }
});

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  certificates: [certificateSchema] // Array of certificates within each department
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
