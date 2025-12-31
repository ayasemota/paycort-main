/**
 * User Model Definition
 * Defines the schema for user accounts, including fintech wallet details
 * and Haus Tax AI profile data.
 */
import mongoose, { Schema, Document } from "mongoose";

/**
 * Interface representing the Tax Profile of a user.
 */
interface ITaxProfile {
  businessType?: string;
  tin?: string;
  lastFilingDate?: Date;
}

/**
 * Interface representing the core User document.
 */
export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  walletBalance: number;
  role: "user" | "admin";
  taxProfile: ITaxProfile;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { 
      type: String, 
      required: true,
      trim: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true 
    },
    passwordHash: { 
      type: String, 
      required: true 
    },
    walletBalance: { 
      type: Number, 
      default: 0,
      min: 0 
    },
    role: { 
      type: String, 
      enum: ["user", "admin"], 
      default: "user" 
    },
    taxProfile: {
      businessType: { type: String },
      tin: { type: String },
      lastFilingDate: { type: Date },
    },
  },
  { 
    timestamps: true 
  }
);

export default mongoose.model<IUser>("User", UserSchema);