
const express = require("express");
require('dotenv').config();
var cors = require('cors')

 

const app = express();
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


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
