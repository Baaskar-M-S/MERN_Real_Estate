// config.DB.js
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure .env variables are loaded

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;
