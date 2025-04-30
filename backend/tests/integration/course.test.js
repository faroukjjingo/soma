import request from 'supertest';
import app from '../../src/app.js';
import mongoose from 'mongoose';
import User from '../../models/User.js';
import Course from '../../models/Course.js';

describe('Course API', () => {
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
    await Course.deleteMany({});
  });

  it('should create a new course', async () => {
    const response = await request(app)
      .post('/api/courses')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Course',
        description: 'Test Description',
      });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Course');
  });

  it('should get all courses', async () => {
    await request(app)
      .post('/api/courses')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Course',
        description: 'Test Description',
      });

    const response = await request(app).get('/api/courses');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });
});
