import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

import { verifyJwt } from "../middlewares/verifyJwt.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { upload } from "../middlewares/multer.middleware.js"; // 👈 your multer setup

const router = express.Router();

// Admin-only: create, update, delete
router.post("/", verifyJwt, isAdmin, upload.single("image"), createProduct);
router.put("/:productId", verifyJwt, isAdmin, upload.single("image"), updateProduct);
router.delete("/:productId", verifyJwt, isAdmin, deleteProduct);

// Public routes
router.get("/", getAllProducts);
router.get("/:productId", getProductById);

export default router;
