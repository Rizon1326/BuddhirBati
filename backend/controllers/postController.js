const Post = require('../models/Post');
const minioClient = require('../config/minioConfig');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const { createNotification } = require('./notificationController');  // Import createNotification

const getUserIdFromToken = (req) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) throw new Error("No token provided");

    const token = authHeader.split(' ')[1];
    if (!token) throw new Error("No token provided");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
};

// Upload code snippet to MinIO and create a post
exports.createPost = async (req, res) => {
    try {
        const userId = getUserIdFromToken(req);
        const { content, codeSnippet } = req.body;

        let codeSnippetUrl = null;

        if (codeSnippet) {
            const bucketName = 'code-snippets';
            const fileName = `${uuidv4()}.txt`;
            const buffer = Buffer.from(codeSnippet);

            const bucketExists = await minioClient.bucketExists(bucketName);
            if (!bucketExists) await minioClient.makeBucket(bucketName, 'us-east-1');

            await minioClient.putObject(bucketName, fileName, buffer);
            codeSnippetUrl = `${bucketName}/${fileName}`;
        }

        const post = new Post({ userId, content, codeSnippetUrl });
        await post.save();

        // Create a notification after creating a post
        await createNotification(userId, "New post created", post._id);

        res.status(201).json({ message: "Post created successfully", post });
    } catch (error) {
        res.status(500).json({ message: "Error creating post", error: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const userId = getUserIdFromToken(req);
        const posts = await Post.find({ userId: { $ne: userId } })
            .sort({ createdAt: -1 })
            .limit(10);
        
            //console.log(JSON.stringify(posts));

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving posts", error: error.message });
    }
};
