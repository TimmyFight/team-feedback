import mongoose from "mongoose";
import { NODE_ENV, MONGO_URI } from "../config/env";

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI inside .env.<environment>.local file"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI || "");
    console.log(`MongoDB connected in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("MongoDB connection error:", error);

    process.exit(1);
  }
};

export default connectToDatabase;
