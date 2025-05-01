import mongoose from 'mongoose';
import { env } from './env.js';

export const connectDB = async () => {
  try {
    const uri = env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI is not defined');
    }
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};