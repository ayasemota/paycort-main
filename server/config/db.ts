import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Initialize environment variables to access MONGO_URI
dotenv.config();

/**
 * Establishes a connection to the MongoDB database.
 * Uses the connection string provided in the .env file.
 */
const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      console.log('Database error: MONGO_URI is missing in .env');
      process.exit(1);
    }

    // Attempt to connect to the database
    const conn = await mongoose.connect(mongoUri);

    console.log('Database Status: Connected to ' + conn.connection.host);
  } catch (error) {
    console.log('Database Status: Connection failed');
    process.exit(1);
  }
};

export default connectDB;