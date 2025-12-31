/**
 * Main entry point for the Paycort Express server.
 * Handles middleware configuration, database connection, and route initialization.
 */
import express, { type Request, type Response, type Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Initialize environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

/**
 * Global Middleware Configuration
 */
app.use(cors());
app.use(express.json());

/**
 * Database Connection Setup
 * Connects to MongoDB using the URI provided in environment variables.
 */
const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/paycort";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });

/**
 * Root Health Check Route
 * Used to verify server status.
 */
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "Server is operational" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});