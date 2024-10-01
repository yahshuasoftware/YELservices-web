const mongoose = require("mongoose");

// ----{OLD ONLY STRING CAN BE STORED}
// const userCertificateSchema = new mongoose.Schema({
//    certificateName: {
//      type: String,
//      required: true
//    },
//    status: {
//      type: String,
//      enum: ['pending', 'approved', 'rejected'], // Status of the certificate application
//      default: 'pending'
//    },
//    uploadedDocuments: {
//      proofOfIdentity: {
//        type: [String], // Array of links to uploaded identity documents
//        required: true
//      },
//      proofOfAddress: {
//        type: [String], // Array of links to uploaded address documents
//        required: true
//      }
//    },
//    applicationDate: {
//      type: Date,
//      default: Date.now // Automatically store the date of application
//    }
//  });


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
    proofOfIdentity: [
      {
        filename: String, // Name of the file
        path: String,     // File path or URL
        mimetype: String, // MIME type (e.g., image/jpeg, application/pdf)
        size: Number      // File size in bytes
      }
    ],
    proofOfAddress: [
      {
        filename: String, 
        path: String,
        mimetype: String,
        size: Number
      }
    ]
  },
  applicationDate: {
    type: Date,
    default: Date.now // Automatically store the date of application
  }
});

const UserSchema= new mongoose.Schema({
 name:{
    type:String,
    required:true,

 },
 password:{
    type:String,
    required:true,
    
 },
 email:{
    type:String,
    required:true,
    unique: true, 
    
 },
 district: { type: String },

 certificatesApplied: [userCertificateSchema], // Store details of applied certificates
});

const usermodel = mongoose.model("user", UserSchema);



module.exports=usermodel;
