const notificationService = require('../services/notificationService');

/**
 * GET Notifications (Mobile App)
 */
exports.getNotifications = async (req, res) => {
  try {
    const userId = req.user?.id || null; // JWT optional

    const notifications = await notificationService.getNotifications(userId);

    res.status(200).json({
      success: true,
      data: notifications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch notifications'
    });
  }
};

/**
 * CREATE Notification
 */
exports.createNotification = async (req, res) => {
  try {
    const notification = await notificationService.createNotification(req.body);

    res.status(201).json({
      success: true,
      message: 'Notification created',
      data: notification
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create notification'
    });
  }
};

/**
 * DELETE Notification
 */
exports.deleteNotification = async (req, res) => {
  try {
    await notificationService.deleteNotification(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Notification deleted'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete notification'
    });
  }
};
