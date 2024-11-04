// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Packages
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';

// Utilities
import connectDB from "./config/database.js";
import userRoutes from './routes/userRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';
import uploadRoutes from './utils/upload.js'; // Adjust the path as necessary
import SearchRoute from './routes/SearchRoutes.js';

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // Update this if your frontend is hosted elsewhere
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/users", userRoutes);
app.use("/api/property", propertyRoutes);

// Middleware for serving static files
app.use("/api/uploads", express.static("uploads")); // Serve uploaded files

// Use upload routes
app.use("/api", uploadRoutes); // Prefix routes with /api

// Use the SearchRoute for property-related search functionality
app.use("/api/properties", SearchRoute);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error Handler Middleware
app.use((err, req, res, next) => {
  // Log the error stack trace for debugging
  console.error(err.stack);
  
  // Check for different types of errors and send appropriate response
  if (err.name === 'ValidationError') {
    // Handle Mongoose validation errors
    return res.status(400).json({ message: err.message, errors: err.errors });
  }

  if (err.name === 'CastError') {
    // Handle invalid ObjectId errors
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  // Default error handler for other types of errors
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
