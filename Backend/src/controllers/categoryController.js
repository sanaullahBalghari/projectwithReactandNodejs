import { Category } from "../models/Category.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "Category name is required");
  }

  const exists = await Category.findOne({ name });
  if (exists) {
    throw new ApiError(409, "Category already exists");
  }

  const category = await Category.create({ name });

  return res
    .status(201)
    .json(new ApiResponse(201, category, "Category created successfully"));
});

//  Get All Categories (Public)
export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });

  return res
    .status(200)
    .json(new ApiResponse(200, categories, "Categories fetched successfully"));
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "Category name is required");
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.categoryId,
    { name },
    { new: true, runValidators: true }
  );

  if (!updatedCategory) {
    throw new ApiError(404, "Category not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedCategory, "Category updated successfully"));
});


export const deleteCategory = asyncHandler(async (req, res) => {
  const deletedCategory = await Category.findByIdAndDelete(req.params.categoryId);

  if (!deletedCategory) {
    throw new ApiError(404, "Category not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedCategory, "Category deleted successfully"));
});
