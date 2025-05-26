import express from "express";
import cors from "cors";
import { PORT } from "./config/env";
import feedbackRoutes from "./routes/feedback";

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(express.json());

app.use("/api/feedback", feedbackRoutes);

app.listen(PORT, async () => {
  console.log(`Team Feedback API is running on http://localhost:${PORT}`);

  // connectToDatabase();
});

export default app;
