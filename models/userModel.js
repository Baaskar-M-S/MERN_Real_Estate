const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['owner', 'agent/agency', 'builder', 'promoter'],
    required: true
  },
  name: {
    type: String,
    required: false,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  password: {
    type: String,
    required: true,
    minlength: 2
  },
  mobileNumber: {
    type: Number, // changed to String
    required: false,
    unique: true,
    match: [/^[0-9]{10}$/, 'is invalid']
  },
  companyName: {
    type: String,
    trim: true
  },
  img: {
    type: String,
  
  },
  role: {
    type: String,
    enum: ['Admin', 'Editor', 'Customer'],
    default: 'Customer' 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
