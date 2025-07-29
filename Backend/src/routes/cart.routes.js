// routes/cart.routes.js
import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/shop.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add", verifyJWT, addToCart);
router.delete("/remove/:productId", verifyJWT, removeFromCart);
router.get("/", verifyJWT, getCart);

export default router;
