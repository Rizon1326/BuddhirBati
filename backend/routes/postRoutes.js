// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const { createPost, getPosts } = require('../controllers/postController');

// Define routes and pass callback functions
router.post('/', createPost);
router.get('/', getPosts);

module.exports = router;
