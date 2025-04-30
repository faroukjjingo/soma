import User from '../models/User.js';
import Course from '../models/Course.js';
import Enrollment from '../models/Enrollment.js';

export const getAnalyticsData = async () => {
  const totalUsers = await User.countDocuments();
  const totalCourses = await Course.countDocuments();
  const totalEnrollments = await Enrollment.countDocuments();
  return { totalUsers, totalCourses, totalEnrollments };
};
