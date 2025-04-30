import Notification from '../../models/Notification.js';

export const getNotifications = async (req, res, next) => {
  const notifications = await Notification.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(notifications);
};

export const markAsRead = async (req, res, next) => {
  const notification = await Notification.findByIdAndUpdate(
    req.params.id,
    { read: true },
    { new: true }
  );
  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  res.json(notification);
};
