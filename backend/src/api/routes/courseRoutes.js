import { Router } from 'express';
import {
  getCourses,
  getCourseById,
  createCourse,
  enrollCourse,
  getEnrolledCourses,
  getInstructorCourses,
} from '../controllers/courseController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';
import { courseValidator } from '../validators/courseValidator.js';

const router = Router();

router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/', authMiddleware, roleMiddleware(['instructor']), upload.single('thumbnail'), courseValidator.create, createCourse);
router.post('/:id/enroll', authMiddleware, roleMiddleware(['student']), enrollCourse);
router.get('/enrolled', authMiddleware, roleMiddleware(['student']), getEnrolledCourses);
router.get('/instructor', authMiddleware, roleMiddleware(['instructor']), getInstructorCourses);

export default router;
