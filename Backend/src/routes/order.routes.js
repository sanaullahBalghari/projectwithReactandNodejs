import express from "express";
import { placeOrder ,getOrderDetails, getMyOrders} from "../controllers/order.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();





router.post("/place", verifyJWT, placeOrder);

router.get("/:orderId", verifyJWT, getOrderDetails);
router.get("/allorders", verifyJWT, getMyOrders);
export default router;
