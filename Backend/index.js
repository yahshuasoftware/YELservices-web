
const express = require("express");
require('dotenv').config();
const cors = require('cors')
const router=require('./App/index')

const app = express();
app.use(express.static("uploads"));

const connectDB=require("./config/DB")

const Port = process.env.REACT_APP_PORT;
const port = Port;

connectDB()
// Middleware to parse JSON bodies 
app.use(express.json());
app.use(cors())

app.use("/app",router);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
