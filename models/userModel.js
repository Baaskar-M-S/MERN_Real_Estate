const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['owner', 'agent/agency', 'builder', 'promoter'],
    required: true
  },
  name: {
    type: String,
    required: true,
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
    minlength: 6
  },
  mobileNumber: {
    type: Number,
    required: true,
    unique: true,
    match: [/^[0-9]{10}$/, 'is invalid']
  },
  companyName: {
    type: String,
    required: false,
    trim: true
  },
  address: {
    type: String,
    required: false,

  },
  img:{
    type:String,
    required:false
  },
  // otp: {
  //   type: String,
  //   required: true,
  // },
  // otpExpires: {
  //   type: Date,
  //   required: true,
  // },
  role:{
    type:String,}
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
