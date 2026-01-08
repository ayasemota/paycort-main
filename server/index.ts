/**
 * Main entry point for the Paycort Express server.
 * Handles middleware configuration, database connection, and route initialization.
 */
import express, { type Request, type Response, type Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js" // Use your existing config
import authRoutes from "./routes/auth.js" // Import the auth routes we just created

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
 */
connectDB(); // Replaces the inline mongoose.connect for cleaner code

/**
 * Route Initialization
 */
// Mount auth routes (Register/Login)
app.use("/api/auth", authRoutes);

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