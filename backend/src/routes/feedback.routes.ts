//@ts-nocheck

import { Router } from "express";

import {
  createFeedback,
  getUserFeedbacks,
} from "../controllers/feedback.controller";
import authorize from "../middlewares/auth.middleware";

const feedbackRouter = Router();

feedbackRouter.get("/:id", authorize, getUserFeedbacks);

feedbackRouter.post("/", authorize, createFeedback);

export default feedbackRouter;
