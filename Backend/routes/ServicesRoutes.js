const express = require("express");
const { getServices,postServices } = require("../controller/ServicesControllers");

const router= express.Router();


router.get('/getServices',getServices);
router.post('/addServices',postServices)


module.exports=router;