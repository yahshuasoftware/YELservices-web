
const express = require("express");
require('dotenv').config();
const cors = require('cors')
const router=require('./App/index')

const app = express();
app.use(express.static("uploads"));

const connectDB=require("./config/DB")

const PORT = process.env.REACT_APP_PORT;
// const port = Port;

connectDB()
// Middleware to parse JSON bodies 
app.use(express.json());
app.use(cors({
    origin: ['http://100.26.236.115:3000','http://localhost:3000'],
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use("/app",router);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
