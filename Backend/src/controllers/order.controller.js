import { Order } from "../models/order.models.js";
import { Cart } from "../models/cart.models.js";
import { Product } from "../models/shop.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
export const placeOrder = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { fullName, phone, address, city, postalCode } = req.body;

  console.log("User ID:", userId);


  // Step 1: Validate shipping fields
  if (!fullName || !phone || !address || !city || !postalCode) {
    throw new ApiError(400, "All shipping fields are required");
  }

  // Step 2: Fetch cart with populated product details
  const cart = await Cart.findOne({ user: userId }).populate("items.product");

  if (!cart || cart.items.length === 0) {
    throw new ApiError(400, "Your cart is empty");
  }

  let total = 0;

  //  Step 3: Loop through valid cart items only
  for (const item of cart.items) {
    const product = item.product;

    //  NEW: Check if product exists (not null)
    if (!product) {
      console.log(" Skipping null product in cart item:", item._id);
      continue;
    }

    console.log("Checking stock for product:", product.name);

    if (product.stock < item.quantity) {
      throw new ApiError(400, `Product ${product.name} is out of stock`);
    }

    // Reduce stock and calculate total
    product.stock -= item.quantity;
    await product.save();

    total += product.price * item.quantity;
  }

  // ✅ Step 4: Create order with only valid items
  const order = await Order.create({
    user: userId,
    items: cart.items
      .filter(item => item.product) // ✅ Only include valid products
      .map(item => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
    totalAmount: total,
    shippingInfo: {
      fullName,
      phone,
      address,
      city,
      postalCode,
    },
  });

  // Step 5: Clear cart
  await Cart.findOneAndDelete({ user: userId });

  // Final response
  return res
    .status(201)
    .json(new ApiResponse(201, order, "Order placed successfully"));
});

// get signle order details 
export const getOrderDetails = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;

  const order = await Order.findById(orderId)
    .populate("items.product", "name price images") // add more fields if needed
    .populate("user", "name email"); // optional: include user info

  if (!order) {
    throw new ApiError(404, "Order not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, order, "Order details fetched successfully"));
});


// get alll orders of logged in user 
export const getMyOrders = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const orders = await Order.find({ user: userId })
    .populate("items.product", "name price images")
    .sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(200, orders, "User orders fetched successfully")
  );
});


// get all orders wihtout any filter for admin 
export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate("user", "name email")
    .populate("items.product", "name price images")
    .sort({ createdAt: -1 });

  return res.status(200).json(new ApiResponse(200, orders, "All orders fetched successfully"));
});

// order status update by admin 
export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  const order = await Order.findById(orderId);
  if (!order) throw new ApiError(404, "Order not found");

  order.status = status;
  await order.save();

  return res.status(200).json(new ApiResponse(200, order, "Order status updated successfully"));
});


// dashboard home stst 
export const getDashboardStats = asyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalProducts = await Product.countDocuments();
  const totalOrders = await Order.countDocuments();
  const totalRevenueAgg = await Order.aggregate([
    { $group: { _id: null, total: { $sum: "$totalAmount" } } }
  ]);

  const totalRevenue = totalRevenueAgg[0]?.total || 0;

  return res.status(200).json(
    new ApiResponse(200, {
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue,
    })
  );
});
