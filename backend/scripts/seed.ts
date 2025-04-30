import mongoose from 'mongoose';
import User from '../src/models/User.js';
import Course from '../src/models/Course.js';
import { connectDB } from '../src/config/database.js';
import bcrypt from 'bcryptjs';

const seed = async () => {
  await connectDB();

  await User.deleteMany({});
  await Course.deleteMany({});

  const admin = new User({
    name: 'Admin',
    email: 'admin@example.com',
    password: await bcrypt.hash('admin123', 10),
    role: 'admin',
  });
  await admin.save();

  const instructor = new User({
    name: 'Instructor',
    email: 'instructor@example.com',
    password: await bcrypt.hash('instructor123', 10),
    role: 'instructor',
  });
  await instructor.save();

  const course = new Course({
    title: 'Sample Course',
    description: 'This is a sample course.',
    instructor: instructor._id,
  });
  await course.save();

  console.log('Database seeded');
  mongoose.connection.close();
};

seed();
