// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace 'your_mongodb_uri' with your actual MongoDB connection string
        await mongoose.connect('mongodb+srv://tusharsarode0228:XATushar@techtroops.aykfmnj.mongodb.net/?retryWrites=true&w=majority&appName=techtroops'
        );
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
