const usermodel = require("../models/UserModel");

const getprofile = async (req, res) => {
  try {
    // Use findOne and pass an object { email: req.user.email }
    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) return res.status(404).send('User not found');
    
    res.json(user); // Return the user details
  } catch (error) {
    res.status(500).send('Error fetching user profile: ' + error.message);
  }
};

module.exports = getprofile;
