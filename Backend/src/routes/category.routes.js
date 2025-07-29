import express from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/isAdmin.middleware.js";

const router = express.Router();

// Admin-only routes
router.post("/", verifyJWT, isAdmin, createCategory);
router.put("/:categoryId", verifyJWT, isAdmin, updateCategory);
router.delete("/:categoryId", verifyJWT, isAdmin, deleteCategory);

// Public route
router.get("/", getAllCategories);

export default router;
