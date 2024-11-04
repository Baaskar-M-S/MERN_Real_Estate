import express from "express";
import {
  createUser,
  getAllUsers,
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/usersController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
const { authenticate, authorizeAdmin } = authMiddleware;

const router = express.Router();

// Public routes
router.post("/", createUser); // Register user
router.post("/auth", loginUser); // Login user
router.post("/logout", logoutCurrentUser); // Logout user

// Authenticated user routes
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile) // Get profile
  .put(authenticate, updateCurrentUserProfile); // Update profile

// Admin-only routes
router
  .route("/")
  .get(authenticate, authorizeAdmin, getAllUsers); // Get all users (admin only)

router
  .route("/:id")
  .delete(authenticate, authorizeAdmin, deleteUserById) // Delete user by ID (admin only)
  .get(authenticate, authorizeAdmin, getUserById) // Get user by ID (admin only)
  .put(authenticate, authorizeAdmin, updateUserById); // Update user by ID (admin only)

export default router;
