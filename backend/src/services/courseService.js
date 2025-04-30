import Course from '../models/Course.js';

export const findCourses = async () => {
  return await Course.find().populate('instructor', 'name');
};

export const findCourseById = async (id) => {
  return await Course.findById(id).populate('instructor', 'name').populate('lessons');
};
