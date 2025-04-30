import Course from '../../models/Course.js';
import Enrollment from '../../models/Enrollment.js';
import { uploadFile } from '../../services/storageService.js';

export const getCourses = async (req, res, next) => {
  const courses = await Course.find().populate('instructor', 'name');
  res.json(courses);
};

export const getCourseById = async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate('instructor', 'name').populate('lessons');
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  res.json(course);
};

export const createCourse = async (req, res, next) => {
  const { title, description } = req.body;
  let thumbnailUrl = '';
  if (req.file) {
    thumbnailUrl = await uploadFile(req.file, 'courses');
  }
  const course = new Course({
    title,
    description,
    thumbnail: thumbnailUrl,
    instructor: req.user.id,
  });
  await course.save();
  res.status(201).json(course);
};

export const enrollCourse = async (req, res, next) => {
  const enrollment = new Enrollment({
    user: req.user.id,
    course: req.params.id,
  });
  await enrollment.save();
  res.json({ message: 'Enrolled successfully' });
};

export const getEnrolledCourses = async (req, res, next) => {
  const enrollments = await Enrollment.find({ user: req.user.id }).populate({
    path: 'course',
    populate: { path: 'instructor', select: 'name' },
  });
  const courses = enrollments.map((e) => e.course);
  res.json(courses);
};

export const getInstructorCourses = async (req, res, next) => {
  const courses = await Course.find({ instructor: req.user.id }).populate('instructor', 'name');
  res.json(courses);
};
