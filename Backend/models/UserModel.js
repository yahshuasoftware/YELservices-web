const mongoose= require("mongoose");

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


})

const usermodel=mongoose.model("user",UserSchema)

module.exports=usermodel;
