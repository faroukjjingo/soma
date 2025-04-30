import { Router } from 'express';
import { getAnalytics } from '../controllers/analyticsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';

const router = Router();

router.get('/', authMiddleware, roleMiddleware(['admin']), getAnalytics);

export default router;
