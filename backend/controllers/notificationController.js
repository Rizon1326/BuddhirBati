// controllers/notificationController.js
const Notification = require('../models/Notification');
const jwt = require('jsonwebtoken');

const getUserIdFromToken = (req) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) throw new Error("No token provided");

    const token = authHeader.split(' ')[1];
    if (!token) throw new Error("No token provided");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
};

// Create a notification for a specific user
exports.createNotification = async (userId, message, postId = null) => {
    try {
        const notification = new Notification({
            userId,
            message,
            postId
        });
        await notification.save();
        console.log("Notification created:", notification);
    } catch (error) {
        console.error("Error creating notification:", error);
    }
};

// Retrieve notifications for the logged-in user
exports.getNotifications = async (req, res) => {
    try {
        const userId = getUserIdFromToken(req);

        const notifications = await Notification.find({ userId })
            .sort({ createdAt: -1 })
            .limit(10);  // Retrieve the latest 10 notifications

        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving notifications", error: error.message });
    }
};
