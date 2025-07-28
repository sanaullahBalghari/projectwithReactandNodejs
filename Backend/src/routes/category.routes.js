import express from "express";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { verifyJwt } from "../middlewares/verifyJwt.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// Admin-only routes
router.post("/", verifyJwt, isAdmin, createCategory);
router.put("/:categoryId", verifyJwt, isAdmin, updateCategory);
router.delete("/:categoryId", verifyJwt, isAdmin, deleteCategory);

// Public route
router.get("/", getAllCategories);

export default router;
