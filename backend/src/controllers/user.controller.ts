import { Request, Response, NextFunction } from "express";

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

export const getUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if ((req as any).user.id !== req.params.id) {
      const error: any = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }

    const userDetails = await User.findById(req.params.id).select("fullName");

    res.status(200).json({ success: true, data: userDetails });
  } catch (error) {
    next(error);
  }
};
