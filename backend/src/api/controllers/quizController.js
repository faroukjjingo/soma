import Quiz from '../../models/Quiz.js';

export const getQuizzes = async (req, res, next) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};

export const getQuizById = async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found' });
  }
  res.json(quiz);
};

export const createQuiz = async (req, res, next) => {
  const quiz = new Quiz({
    ...req.body,
    createdBy: req.user.id,
  });
  await quiz.save();
  res.status(201).json(quiz);
};

export const submitQuiz = async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found' });
  }
  const { answers } = req.body;
  let score = 0;
  quiz.questions.forEach((q) => {
    if (answers[q._id] === q.correctAnswer) {
      score++;
    }
  });
  res.json({ score, total: quiz.questions.length });
};
