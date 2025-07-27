import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "User Full Name is required"],
      trim: true,
      minLength: [3, "User Full Name must be at least 3 characters"],
      maxLength: [50, "User Full Name must not be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "User Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      minLength: [3, "User Email must be at least 3 characters"],
      maxLength: [50, "User Email must not be more than 50 characters"],
      match: [
        /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "User Password is required"],
      minLength: [6, "User Password must be at least 6 characters"],
    },
    givenFeedbacks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
