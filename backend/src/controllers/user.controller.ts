import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env";

import User from "../models/user.model";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find().select("-password -email");

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};
