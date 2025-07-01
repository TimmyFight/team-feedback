import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { PORT } from "./config/env";

import authRouter from "./routes/auth.routes";
import feedbackRouter from "./routes/feedback.routes";
import connectToDatabase from "./database/mongodb";
import errorMiddleware from "./middlewares/error.middleware";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use("/api/auth", authRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/users", userRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Team Feedback API is running on http://localhost:${PORT}`);

  connectToDatabase();
});

export default app;
