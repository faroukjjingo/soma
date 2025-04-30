import { Router } from 'express';
import { getProgress, updateProgress } from '../controllers/progressController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/:courseId', authMiddleware, getProgress);
router.post('/:courseId', authMiddleware, updateProgress);

export default router;
