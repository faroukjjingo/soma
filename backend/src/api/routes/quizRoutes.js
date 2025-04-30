import { Router } from 'express';
import {
  getQuizzes,
  getQuizById,
  createQuiz,
  submitQuiz,
} from '../controllers/quizController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';
import { quizValidator } from '../validators/quizValidator.js';

const router = Router();

router.get('/', getQuizzes);
router.get('/:id', getQuizById);
router.post('/', authMiddleware, roleMiddleware(['instructor']), quizValidator.create, createQuiz);
router.post('/:id/submit', authMiddleware, roleMiddleware(['student']), submitQuiz);

export default router;
