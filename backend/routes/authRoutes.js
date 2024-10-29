// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');

// Define the routes
router.post('/signup', signup);
router.post('/signin', signin);

// Export the router object
module.exports = router;
