const usermodel = require("../models/UserModel");

const revertApplication = async (req, res) => {
  const { certificateId } = req.params;
  const { revertReason, revertDocuments } = req.body; // Receive reason and documents
  
  try {
    const user = await usermodel.findOne({ 'certificatesApplied._id': certificateId });
    
    if (user) {
      const certificate = user.certificatesApplied.id(certificateId);
      
      if (!certificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }
      
      certificate.status = 'reverted';
      certificate.revertReason = revertReason;
      certificate.revertUploads = revertDocuments; // Save new uploaded documents
      
      await user.save();
      
      return res.status(200).json({ message: 'Certificate reverted successfully' });
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error reverting certificate', error });
  }
};

module.exports = revertApplication;
