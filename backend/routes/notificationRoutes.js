// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const { getNotifications } = require('../controllers/notificationController');

// Route to get notifications for the logged-in user
router.get('/', getNotifications);

module.exports = router;
