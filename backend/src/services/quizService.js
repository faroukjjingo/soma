import Quiz from '../models/Quiz.js';

export const findQuizzes = async () => {
  return await Quiz.find();
};

export const findQuizById = async (id) => {
  return await Quiz.findById(id);
};
