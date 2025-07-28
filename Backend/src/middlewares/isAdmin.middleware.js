import { ApiError } from "../utils/ApiError.js";

export const isAdmin = (req, res, next) => {
  try {
    // JWT verification middleware se req.user set hona chahiye
    if (!req.user || req.user.role !== "ADMIN") {
      throw new ApiError(403, "Access denied. Admins only.");
    }

    next(); // Move to next middleware/controller
  } catch (error) {
    next(error);
  }
};
