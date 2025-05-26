import express from "express";
import Feedback from "../models/Feedback";

const router = express.Router();

router.get("/", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

router.post("/", async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.status(201).json(feedback);
});

export default router;
