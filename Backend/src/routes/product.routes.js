import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/shop.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/isAdmin.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// Admin-only: create
router.post("/", verifyJWT, isAdmin, upload.single("image"), createProduct);


// get all prodduct Public routes
router.get("/", getAllProducts);

// Get Product by ID (public)
router.get("/:productId", getProductById);

// Update Product by ID (admin only)
router.patch( "/:productId",verifyJWT,isAdmin,upload.single("image"), updateProduct);

// Delete Product by ID (admin only)
router.delete("/:productId", verifyJWT, isAdmin, deleteProduct);


export default router;
