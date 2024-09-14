const express = require("express");
const { getServices,postServices } = require("../controller/ServicesControllers");

const router= express.Router();


router.get('/',getServices);
router.post('/',postServices)


module.exports=router;