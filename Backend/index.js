
const express = require("express");
require('dotenv').config();
const cors = require('cors')




 

const app = express();
app.use(express.static("uploads"));
app.use(cors())

const servicesroutes = require("./routes/ServicesRoutes");

const authroutes = require("./routes/authRoutes");
const userroutes=require("./routes/userRoutes")
const departmentRoutes=require("./routes/departmentRoutes")
const paymentRoutes = require('./routes/PaymentRoutes');



const connectDB=require("./config/DB")

<<<<<<< HEAD
const Port = process.env.REACT_APP_PORT;
const port = Port;
=======
const port = process.env.REACT_APP_PORT;

>>>>>>> 1e98fe9355a350ce6c0fbc8a4a59bb9dc77ca184

connectDB()
// Middleware to parse JSON bodies 
app.use(express.json());
app.use(cors())

// Use the services routes
app.use("/api", servicesroutes);
app.use("/api", authroutes);
app.use("/api", userroutes);
app.use('/api', departmentRoutes);
app.use('/api/payment', paymentRoutes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
