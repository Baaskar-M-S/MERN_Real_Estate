import jwt from "jsonwebtoken";
import User from "../models/usersModel.js";
import asyncHandler from "./asyncHandler.js";

// Middleware to authenticate a user by verifying their JWT token
const authenticate = asyncHandler(async (req, res, next) => {
  // Retrieve token from cookies
  const token = req.cookies.jwt;

  // Check if token exists
  if (token) {
    try {
      // Verify the token using JWT_SECRET
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Find the user in the database by decoded user ID, excluding the password field
      req.user = await User.findById(decoded.userId).select("-password");

      // If the user is found and token is valid, proceed to the next middleware
      next();
    } catch (error) {
      // If token verification fails, return a 401 Unauthorized error
      res.status(401);
      throw new Error("Not authorized, token verification failed");
    }
  } else {
    // If no token is provided, return a 401 Unauthorized error
    res.status(401);
    throw new Error("Not authorized, no token provided");
  }
});

// Middleware to authorize admin users only
const authorizeAdmin = (req, res, next) => {
  // Check if user is authenticated and has an admin role
  if (req.user && req.user.isAdmin) {
    // If user is an admin, proceed to the next middleware
    next();
  } else {
    // If user is not an admin, return a 403 Forbidden error
    res.status(403).send("Forbidden: Not authorized as an Admin");
  }
};

// Export the authentication and authorization functions for use in routes
export default { authenticate, authorizeAdmin };
