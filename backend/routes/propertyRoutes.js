import express from "express";
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
} from "../controllers/propertyController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const { authenticate, authorizeAdmin } = authMiddleware;

const router = express.Router();

// Public routes
router.get("/", getAllProperties); // Get all properties

// Authenticated user routes
router
  .route("/my-properties") // For users to manage their own properties
  .post(authenticate, createProperty); // User creates a property

router
  .route("/my-properties/:id") // For users to manage specific properties
  .get(authenticate, getPropertyById) // User gets their property by ID
  .put(authenticate, updatePropertyById) // User edits their property
  .delete(authenticate, deletePropertyById); // User deletes their property

// Admin-only routes
router
  .route("/admin/:id") // Admin controls properties by ID
  .get(authenticate, authorizeAdmin, getPropertyById) // Admin gets property by ID
  .put(authenticate, authorizeAdmin, updatePropertyById) // Admin updates property
  .delete(authenticate, authorizeAdmin, deletePropertyById); // Admin deletes property

export default router;
