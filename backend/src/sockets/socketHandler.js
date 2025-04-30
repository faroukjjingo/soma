import { createNotification } from '../services/notificationService.js';

export const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join', (userId) => {
      socket.join(userId);
    });

    socket.on('sendNotification', async ({ userId, message }) => {
      const notification = await createNotification(userId, message);
      io.to(userId).emit('notification', notification);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
