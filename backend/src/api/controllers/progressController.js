import Progress from '../../models/Progress.js';

export const getProgress = async (req, res, next) => {
  const progress = await Progress.find({ user: req.user.id, course: req.params.courseId });
  res.json(progress);
};

export const updateProgress = async (req, res, next) => {
  const { lessonId, completed } = req.body;
  const progress = await Progress.findOneAndUpdate(
    { user: req.user.id, course: req.params.courseId, lesson: lessonId },
    { completed },
    { upsert: true, new: true }
  );
  res.json(progress);
};
