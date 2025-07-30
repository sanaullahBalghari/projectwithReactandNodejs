// routes/cart.routes.js
import express from "express";
import { addToCart, removeFromCart, getCart ,updateCartItemQuantity} from "../controllers/shop.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add", verifyJWT, addToCart);
router.delete("/remove/:productId", verifyJWT, removeFromCart);
router.get("/", verifyJWT, getCart);
router.patch("/update/:productId", verifyJWT, updateCartItemQuantity);

// http:localhost/8000//api/cart/add  addd to cart 
// http:localhost/8000//api/cart/remove/:productId remove cart
// http:localhost/8000//api/cart get cart item 

export default router;