
const express = require("express");
require('dotenv').config();
const cors = require('cors')



 

const app = express();
app.use(express.static("uploads"));
const servicesroutes = require("./routes/ServicesRoutes");
const authroutes = require("./routes/authRoutes");
const userroutes=require("./routes/userRoutes")
const departmentRoutes=require("./routes/departmentRoutes")


const connectDB=require("./config/DB")

const port = 8080;

connectDB()
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Use the services routes
app.use("/api", servicesroutes);
app.use("/api", authroutes);
app.use("/api", userroutes);
app.use('/api', departmentRoutes);
app.use('/api', userroutes);


// ///////////////////////////////////////////////////////////////////
// Create a new user (POST)
// app.post('/api/users', async (req, res) => {
//     try {
//       const newUser = new usermodel(req.body);
//       const savedUser = await newUser.save();
//       res.status(201).json(savedUser);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // Get all users (GET)
// app.get('/api/users', async (req, res) => {
//     try {
//       const users = await usermodel.find();
//       res.json(users);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
//   // Get a specific user by ID (GET)
//   app.get('/api/users/:id', async (req, res) => {
//     try {
//       const user = await usermodel.findById(req.params.id);
//       if (!user) return res.status(404).json({ message: 'User not found' });
//       res.json(user);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
//   // Add a certificate to a user's profile (POST)----{OLD ONLY STRING CAN BE STORED}
//   // app.post('/api/users/:id/certificates', async (req, res) => {
//   //   try {
//   //     const user = await usermodel.findById(req.params.id);
//   //     if (!user) return res.status(404).json({ message: 'User not found' });
  
//   //     user.certificatesApplied.push(req.body);
//   //     await user.save();
//   //     res.json(user);
//   //   } catch (err) {
//   //     res.status(400).json({ message: err.message });
//   //   }
//   // });

// // to delete the user form the database
//   app.delete('/api/users/:id', async (req, res) => {
//     try {
//       const deletedUser = await usermodel.findByIdAndDelete(req.params.id);
//       if (!deletedUser) return res.status(404).json({ message: 'User not found' });
//       res.json({ message: 'User deleted successfully' });
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  

//   const multer = require('multer');
// const path = require('path');
// // Configure Multer for file uploads
//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/'); // Set the directory to store files
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname)); // Use the current timestamp + file extension as the filename
//     }
//   });
  
//   const upload = multer({ storage: storage });
  
//   // Controller to upload files and add certificates
//   app.post('/api/users/:id/certificates', upload.fields([
//     { name: 'proofOfIdentity', maxCount: 2 }, // Upload up to 2 proof of identity documents
//     { name: 'proofOfAddress', maxCount: 2 }   // Upload up to 2 proof of address documents
//   ]), async (req, res) => {
//     try {
//       const user = await usermodel.findById(req.params.id);
//       if (!user) return res.status(404).json({ message: 'User not found' });

//       console.log(req.files);

//     // Check if the required 'certificateName' field exists in the request body
//     if (!req.body.certificateName) {
//       return res.status(400).json({ message: 'certificateName is required.' });
//     }
  
//       // Prepare the uploaded document info
//       const proofOfIdentityDocs = req.files['proofOfIdentity'] ? req.files['proofOfIdentity'].map(file => ({
//         filename: file.originalname,
//         path: file.path,
//         mimetype: file.mimetype,
//         size: file.size
//       })) : [];
  
//       const proofOfAddressDocs = req.files['proofOfAddress'] ? req.files['proofOfAddress'].map(file => ({
//         filename: file.originalname,
//         path: file.path,
//         mimetype: file.mimetype,
//         size: file.size
//       })) : [];
//       console.log('Proof of Address Documents:', proofOfAddressDocs);

//       // Add the new certificate to the user's certificatesApplied array
//       user.certificatesApplied.push({
//         certificateName: req.body.certificateName,
//         uploadedDocuments: {
//           proofOfIdentity: proofOfIdentityDocs,
//           proofOfAddress: proofOfAddressDocs
//         }
//       });
//       await user.save();
//       res.json(user);
//       console.log(user);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });
  
///////////////////////////////////////////////////////////////

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
