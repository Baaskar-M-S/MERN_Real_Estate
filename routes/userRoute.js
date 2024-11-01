const express = require("express");

const User = require("../models/userModel");
const router = express.Router();
require("dotenv").config();
const crypto = require("crypto");
const nodemailer = require("nodemailer");






// Route to find user by email
router.get("/user/:email", async (req, res) => {
  const { email } = req.params; // Get email from URL parameters

  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user's ID and any other information you need
    res.json({ id: user._id, name: user.name, email: user.email });
  } catch (error) {
    console.error("Error finding user by email:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});
























router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // if (!user.isVerified) {
    //   return res.status(403).json({ message: "Email not verified" });
    // }

    // Compare entered password with stored password
    if (password !== user.password) {
      return res.status(403).json({ message: "Invalid password" });
    }

    // Login success
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
});
router.post("/register", async (req, res) => {
  try {
    const { type, name, email, password, mobileNumber, companyName, img, role } = req.body;

    const newUser = new User({
      type,
      name,
      email,
      password,
      mobileNumber,
      companyName,
      img,
      role
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});




// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user by ID
router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




module.exports = router;
