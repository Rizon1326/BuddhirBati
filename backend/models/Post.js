const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: String,
    codeSnippetUrl: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
