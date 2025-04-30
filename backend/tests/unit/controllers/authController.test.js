import { login, register } from '../../api/controllers/authController.js';
import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

describe('Auth Controller', () => {
  it('should login user with valid credentials', async () => {
    const req = {
      body: { email: 'test@example.com', password: 'password123' },
    };
    const res = { json: vi.fn() };
    User.findOne = vi.fn().mockResolvedValue({
      _id: '1',
      email: 'test@example.com',
      password: await bcrypt.hash('password123', 10),
      name: 'Test',
      role: 'student',
    });
    bcrypt.compare = vi.fn().mockResolvedValue(true);
    jwt.sign = vi.fn().mockReturnValue('token');

    await login(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ token: 'token' }));
  });

  it('should register new user', async () => {
    const req = {
      body: { name: 'Test', email: 'test@example.com', password: 'password123', role: 'student' },
    };
    const res = { status: vi.fn().mockReturnThis(), json: vi.fn() };
    User.prototype.save = vi.fn().mockResolvedValue({
      _id: '1',
      name: 'Test',
      email: 'test@example.com',
      role: 'student',
    });
    jwt.sign = vi.fn().mockReturnValue('token');

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ token: 'token' }));
  });
});
