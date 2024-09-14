
const express = require("express");
const getprofile = require("../controller/UserController");
const authenticateToken = require("../middleware/AuthMiddleware");
const router = express.Router();

router.get('/profile',authenticateToken,getprofile);



module.exports = router;