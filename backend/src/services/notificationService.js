import Notification from '../models/Notification.js';

export const createNotification = async (userId, message) => {
  const notification = new Notification({ user: userId, message });
  await notification.save();
  return notification;
};

export const findNotifications = async (userId) => {
  return await Notification.find({ user: userId }).sort({ createdAt: -1 });
};
