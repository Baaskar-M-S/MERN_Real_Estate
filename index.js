const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const crypto = require('crypto');
const nodemailer = require('nodemailer'); // For sending email
const twilio = require('twilio'); // For sending SMS

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/', (req, res) => {
  res.send('Server is alive!');
});

// Routes
const userRoute = require('./routes/userRoute');
const propertyRoute = require('./routes/propertyRoute');

app.use('/', userRoute);
app.use('/', propertyRoute);

const PORT = process.env.PORT || 3000; // Ensure default port is set
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



