const Notification = require('../models/Notification');

/**
 * Get notifications (latest first)
 */
exports.getNotifications = async (userId) => {
  return await Notification.find({
    $or: [{ userId }, { userId: null }]
  })
    .sort({ createdAt: -1 })
    .select('title message isRead createdAt');
};

/**
 * Create notification
 */
exports.createNotification = async (data) => {
  return await Notification.create(data);
};

/**
 * Delete notification
 */
exports.deleteNotification = async (id) => {
  return await Notification.findByIdAndDelete(id);
};
