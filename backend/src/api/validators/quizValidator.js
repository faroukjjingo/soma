import { body, validationResult } from 'express-validator';

export const quizValidator = {
  create: [
    body('title').notEmpty().withMessage('Title is required'),
    body('questions').isArray().withMessage('Questions must be an array'),
    body('questions.*.text').notEmpty().withMessage('Question text is required'),
    body('questions.*.options').isArray().withMessage('Options must be an array'),
    body('questions.*.correctAnswer').notEmpty().withMessage('Correct answer is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ],
};
