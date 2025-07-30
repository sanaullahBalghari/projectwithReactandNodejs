import express from "express";
import {
  placeOrder,
  getOrderDetails,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  getDashboardStats
} from "../controllers/order.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {isAdmin} from "../middlewares/isAdmin.middleware.js"
const router = express.Router();

// Place order
router.post("/place", verifyJWT, placeOrder);
router.get("/allorders", verifyJWT, getMyOrders);


// Admin Routes (inside same file)
router.get("/admin/all", verifyJWT, isAdmin, getAllOrders);
router.patch("/admin/:orderId/status", verifyJWT, isAdmin, updateOrderStatus);
router.get("/dashboard/stats", verifyJWT, isAdmin, getDashboardStats);

// This must be last user routes 
router.get("/:orderId", verifyJWT, getOrderDetails);
export default router;
