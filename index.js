const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/DB');
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Server is alive!');
});

const userRoute = require('./routes/userRoute');
const propertyRoute = require('./routes/propertyRoute');

app.use('/api/users', userRoute);
app.use('/api/properties', propertyRoute);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
