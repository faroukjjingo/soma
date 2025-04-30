import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { connectDB } from './config/database.js';
import authRoutes from './api/routes/authRoutes.js';
import courseRoutes from './api/routes/courseRoutes.js';
import userRoutes from './api/routes/userRoutes.js';
import quizRoutes from './api/routes/quizRoutes.js';
import progressRoutes from './api/routes/progressRoutes.js';
import analyticsRoutes from './api/routes/analyticsRoutes.js';
import notificationRoutes from './api/routes/notificationRoutes.js';
import errorMiddleware from './api/middleware/errorMiddleware.js';
import { initializeSocket } from './sockets/socketHandler.js';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/notifications', notificationRoutes);

app.use(errorMiddleware);

initializeSocket(io);

connectDB().then(() => {
  server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
});

export default app;
