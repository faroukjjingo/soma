import request from 'supertest';
import app from '../../src/app.js';
import mongoose from 'mongoose';
import User from '../../models/User.js';
import Quiz from '../../models/Quiz.js';

describe('Quiz API', () => {
  let token;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const user = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Instructor',
        email: 'instructor@example.com',
        password: 'password123',
        role: 'instructor',
      });
    token = user.body.token;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await Quiz.deleteMany({});
  });

  it('should create a new quiz', async () => {
    const response = await request(app)
      .post('/api/quizzes')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Quiz',
        questions: [
          {
            text: 'What is 2+2?',
            options: ['3', '4', '5', '6'],
            correctAnswer: '4',
          },
        ],
      });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Quiz');
  });

  it('should get all quizzes', async () => {
    await request(app)
      .post('/api/quizzes')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Quiz',
        questions: [
          {
            text: 'What is 2+2?',
            options: ['3', '4', '5', '6'],
            correctAnswer: '4',
          },
        ],
      });

    const response = await request(app).get('/api/quizzes');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });
});
