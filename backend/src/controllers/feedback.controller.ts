import Feedback from "../models/feedback.model";
import User from "../models/user.model";

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

    const userFeedbacks = await Feedback.find({
      userId: req.params.id,
    });

    const feedbackWithStats = userFeedbacks.map((feedback: any) => {
      const scores = [
        parseFloat(feedback.communicationFirst),
        parseFloat(feedback.contributionBalanceFirst),
        parseFloat(feedback.opennessFeedbackFirst),
        parseFloat(feedback.clarityGoalsFirst),
        parseFloat(feedback.collaborationSupportFirst),
      ];
      const average =
        scores.reduce((accumulator, value) => accumulator + value, 0) /
        scores.length;

      const highlights = [
        "Communication",
        "Contribution Balance",
        "Openness Feedback",
        "Clarity of Goals",
        "Collaboration Support",
      ];
      const maxScore = Math.max(...scores);
      const index = scores.indexOf(maxScore);
      const highlight = highlights[index] || "No Highlight";

      return {
        createdAt: feedback.createdAt,
        projectName: feedback.projectName,
        average: Math.round(average * 10) / 10,
        highlight,
      };
    });

    res.status(200).json({ success: true, data: feedbackWithStats });
  } catch (error) {
    next(error);
  }
};

export const getUserFeedbackSummary = async (
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

    const userFeedbacks = await Feedback.find({
      userId: req.params.id,
    });

    const userData = await User.findById(req.user.id).select("givenFeedbacks");

    const reviewedFeedbacksAverages = userFeedbacks.map((feedback: any) => {
      const scores = [
        parseFloat(feedback.communicationFirst),
        parseFloat(feedback.contributionBalanceFirst),
        parseFloat(feedback.opennessFeedbackFirst),
        parseFloat(feedback.clarityGoalsFirst),
        parseFloat(feedback.collaborationSupportFirst),
      ];
      const average =
        scores.reduce((accumulator, value) => accumulator + value, 0) /
        scores.length;

      return average;
    });

    const allFeedbacksAverage =
      reviewedFeedbacksAverages.length > 0
        ? reviewedFeedbacksAverages.reduce((acc, val) => acc + val, 0) /
          reviewedFeedbacksAverages.length
        : 0;

    res.status(200).json({
      success: true,
      data: {
        average: Math.round(allFeedbacksAverage * 10) / 10,
        feedbacksRecieved: reviewedFeedbacksAverages.length,
        givenFeedbacks: userData?.givenFeedbacks,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getUserFeedbackCategorySummary = async (
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

    const userFeedbacks = await Feedback.find({
      userId: req.params.id,
    });

    const categoryKeys = [
      "communicationFirst",
      "contributionBalanceFirst",
      "opennessFeedbackFirst",
      "clarityGoalsFirst",
      "collaborationSupportFirst",
    ];

    const categories = [
      "Communication",
      "Contribution Balance",
      "Openness & Feedback",
      "Clarity of Goals",
      "Collaboration & Support",
    ];

    const categorySums = categoryKeys.map(() => 0);

    userFeedbacks.forEach((feedback: any) => {
      categoryKeys.forEach((key, index) => {
        categorySums[index] += parseFloat(feedback[key]);
      });
    });

    const feedbackCount = userFeedbacks.length;
    const categoriesAverage =
      feedbackCount > 0
        ? categorySums.map((sum) => Math.round((sum / feedbackCount) * 10) / 10)
        : categoryKeys.map(() => 0);

    res.status(200).json({
      success: true,
      data: {
        labels: categories,
        datasets: [{ data: categoriesAverage }],
      },
    });
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
    });

    await User.findByIdAndUpdate(
      req.user.id,
      { $inc: { givenFeedbacks: 1 } },
      { new: true }
    );

    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    next(error);
  }
};
