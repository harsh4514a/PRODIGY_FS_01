import  ErrorHandler  from "./error.js";
import { config } from "dotenv";
import { User } from "../models/userModel.js";
import { catchAsyncError } from "./catchAsyncError.js";
config({ path: "./config.env" });
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 400));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decodedData.id);
  next();
});

