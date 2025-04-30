import mongoose from 'mongoose';
import { connectDB } from '../src/config/database.js';

const migrate = async () => {
  await connectDB();
  console.log('Migration completed');
  mongoose.connection.close();
};

migrate();
