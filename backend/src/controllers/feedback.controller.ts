import Feedback from "../models/feedback.model";

import { Request, Response, NextFunction } from "express";

export const getUserFeedbacks = async (
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

    const feedback = await Feedback.find({
      user: req.params.id,
    });

    res.status(200).json({ success: true, data: feedback });
  } catch (error) {
    next(error);
  }
};

export const createFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feedback = await Feedback.create({
      ...req.body,
      user: (req as any).user._id,
    });

    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    next(error);
  }
};
