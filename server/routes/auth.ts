import express, { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; //
import connectDB from "../config/db.js"; //

const router = express.Router();

// Use a secret from .env or a fallback for development
const JWT_SECRET = process.env.JWT_SECRET || "paycort_secret_2026_ai";

/**
 * @route   POST /api/auth/register
 * @desc    Register user & return token
 */
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validation
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Please fill all fields" });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
    }

    await connectDB(); //

    // 2. Check if user exists
    const userExists = await User.findOne({ email: email.toLowerCase() }); //
    if (userExists) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 4. Create User
    const newUser = await User.create({
      name: name.trim(),
      email: email.toLowerCase(),
      passwordHash,
      // walletBalance (0) and role ("user") are default
    });

    // 5. Generate JWT
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server Error";
    res.status(500).json({ success: false, message });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user & return token
 */
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please enter email and password" });
    }

    await connectDB(); //

    // 1. Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // 2. Compare Password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // 3. Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        walletBalance: user.walletBalance, //
        role: user.role //
      }
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server Error";
    res.status(500).json({ success: false, message });
  }
});

export default router;