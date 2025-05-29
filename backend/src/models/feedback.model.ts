import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID is required"],
    },
    projectName: {
      type: String,
      required: [true, "User Full Name is required"],
      trim: true,
      minLength: [3, "User Full Name must be at least 3 characters"],
      maxLength: [50, "User Full Name must not be more than 50 characters"],
    },
    comunicationFirst: {
      type: String,
      required: [true, "Cumunication response is required"],
    },
    contributionBalanceFirst: {
      type: String,
      required: [true, "Contribution Balance response is required"],
    },
    opennessFeedbackFirst: {
      type: String,
      required: [true, "Openness & Feedback response is required"],
    },
    clarityGoalsFirst: {
      type: String,
      required: [true, "Clarity of Goals response is required"],
    },
    collaborationSupportFirst: {
      type: String,
      required: [true, "Collaboration & Support response is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
