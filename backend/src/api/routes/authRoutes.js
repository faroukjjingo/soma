import { Router } from 'express';
import { login, register, forgotPassword } from '../controllers/authController.js';
import { authValidator } from '../validators/authValidator.js';

const router = Router();

router.post('/login', authValidator.login, login);
router.post('/register', authValidator.register, register);
router.post('/forgot-password', authValidator.forgotPassword, forgotPassword);

export default router;
