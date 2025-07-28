//@ts-nocheck

import { Router } from "express";

import {
  createFeedback,
  getUserFeedbacks,
  getUserFeedbackSummary,
  getUserFeedbackCategorySummary,
  getUserFeedbackOverTime,
} from "../controllers/feedback.controller";
import authorize from "../middlewares/auth.middleware";

const feedbackRouter = Router();

feedbackRouter.get(
  "/user/:id/summary/category",
  authorize,
  getUserFeedbackCategorySummary
);

feedbackRouter.get("/user/:id/summary", authorize, getUserFeedbackSummary);

feedbackRouter.get("/user/:id/over-time", authorize, getUserFeedbackOverTime);

feedbackRouter.get("/user/:id", authorize, getUserFeedbacks);

feedbackRouter.post("/", authorize, createFeedback);

export default feedbackRouter;
