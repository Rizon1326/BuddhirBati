// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    codeSnippet: String,           // Store code as text (optional)
    codeSnippetUrl: String,        // URL for code snippet file in MinIO (optional)
    fileUrl: String,               // URL for optional file in MinIO (optional)
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
