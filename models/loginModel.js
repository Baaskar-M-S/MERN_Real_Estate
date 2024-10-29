const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure that the email is unique
      lowercase: true, // Store email in lowercase
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true, // Ensure that the mobile number is unique
    },
    otp: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the User model
module.exports = mongoose.model("login", loginSchema);
