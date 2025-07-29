import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/Category.models.js";
import { Product } from "../models/shop.models.js"
import { uploadOnCloudinary } from "../utils/cloudnairy.js";

// Client → Multer (save to /temp) → Upload to Cloudinary → Remove local → Save Cloud URL in DB


export const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, stock } = req.body;

  if (!name || !description || !price || !category) {
    throw new ApiError(400, "All required fields must be filled");
  }

  const categoryExists = await Category.findById(category);
  if (!categoryExists) {
    throw new ApiError(404, "Invalid category");
  }

  const localPath = req.file?.path;
  console.log("REQ FILE:", req.file);


  if (!localPath) {
    throw new ApiError(400, "Product image is required");
  }

  const uploadedImage = await uploadOnCloudinary(localPath);

  if (!uploadedImage?.secure_url) {
    throw new ApiError(400, "Failed to upload image to Cloudinary");
  }

  const product = await Product.create({
    name,
    description,
    price,
    category,
    stock: stock || 0,
    images: [uploadedImage.secure_url],
  });

  return res
    .status(201)
    .json(new ApiResponse(201, product, "Product created successfully"));
});

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
    .populate("category", "name") // only return category name
    .sort({ createdAt: -1 }); // latest first

  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products fetched successfully"));
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.productId).populate("category", "name");
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, product, "ProductById fetched successfully"));
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, stock } = req.body;

  const product = await Product.findById(req.params.productId);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  
  if (name) product.name = name;
  if (description) product.description = description;
  if (price) product.price = price;
  if (category) {
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      throw new ApiError(404, "Invalid category");
    }
    product.category = category;
  }
  if (stock !== undefined) product.stock = stock;

  // Image upload (optional)
  const localPath = req.file?.path;
  if (localPath) {
    const uploadedImage = await uploadOnCloudinary(localPath);

    if (!uploadedImage?.secure_url) {
      throw new ApiError(400, "Failed to upload image to Cloudinary");
    }

    product.images = [uploadedImage.secure_url]; 
  }

  await product.save();

  return res
    .status(200)
    .json(new ApiResponse(200, product, "Product updated successfully"));
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.productId);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, product, "Product deleted successfully"));
});
