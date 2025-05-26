import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    fullName: String,
    projectName: String,
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
