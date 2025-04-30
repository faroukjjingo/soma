import Progress from '../models/Progress.js';

export const findProgress = async (userId, courseId) => {
  return await Progress.find({ user: userId, course: courseId });
};

export const updateProgress = async (userId, courseId, lessonId, completed) => {
  return await Progress.findOneAndUpdate(
    { user: userId, course: courseId, lesson: lessonId },
    { completed },
    { upsert: true, new: true }
  );
};
