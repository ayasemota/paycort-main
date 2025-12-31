import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Internal imports need .js
//import authRoutes from './routes/auth.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

//app.use('/api/auth', authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Paycort Server is active");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("---");
  console.log("Server Status: Running on http://localhost:" + PORT);
  console.log("Database Status: Initializing...");
  console.log("---");
});
