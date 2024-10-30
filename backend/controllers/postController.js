// postController.js
const Post = require('../models/Post');
const minioClient = require('../config/minioConfig');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { createNotification } = require('./notificationController');

const upload = multer({ storage: multer.memoryStorage() }); // Store files in memory

const getUserIdFromToken = (req) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) throw new Error("No token provided");

    const token = authHeader.split(' ')[1];
    if (!token) throw new Error("No token provided");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
};

// Upload code snippet and file to MinIO and create a post
exports.createPost = [
    upload.fields([
        { name: 'codeSnippetFile', maxCount: 1 },
        { name: 'file', maxCount: 1 }
    ]),
    async (req, res) => {
        try {
            const userId = getUserIdFromToken(req);
            const { title, content, codeSnippet } = req.body;
            let codeSnippetUrl = null;
            let fileUrl = null;

            // Upload codeSnippetFile to MinIO if provided
            if (req.files.codeSnippetFile) {
                const bucketName = 'code-snippets';
                const fileName = `${uuidv4()}.txt`;
                const buffer = req.files.codeSnippetFile[0].buffer;

                const bucketExists = await minioClient.bucketExists(bucketName);
                if (!bucketExists) await minioClient.makeBucket(bucketName, 'us-east-1');

                await minioClient.putObject(bucketName, fileName, buffer);
                codeSnippetUrl = `${bucketName}/${fileName}`;
            }

            // Upload additional file to MinIO if provided
            if (req.files.file) {
                const bucketName = 'user-files';
                const fileName = `${uuidv4()}_${req.files.file[0].originalname}`;
                const buffer = req.files.file[0].buffer;

                const bucketExists = await minioClient.bucketExists(bucketName);
                if (!bucketExists) await minioClient.makeBucket(bucketName, 'us-east-1');

                await minioClient.putObject(bucketName, fileName, buffer);
                fileUrl = `${bucketName}/${fileName}`;
            }

            const post = new Post({
                userId,
                title,
                content,
                codeSnippet,
                codeSnippetUrl,
                fileUrl
            });
            await post.save();

            // Create a notification after creating a post
            await createNotification(userId, "New post created", post._id);

            res.status(201).json({ message: "Post created successfully", post });
        } catch (error) {
            res.status(500).json({ message: "Error creating post", error: error.message });
        }
    }
];

// Fetch all posts including the user's own posts
exports.getPosts = async (req, res) => {
    try {
        const userId = getUserIdFromToken(req);
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .limit(10);

        // Generate a signed URL for each post's code snippet and file URLs
        const postsWithUrl = await Promise.all(
            posts.map(async (post) => {
                const postObj = post.toObject();

                if (post.codeSnippetUrl) {
                    const [bucketName, fileName] = post.codeSnippetUrl.split('/');
                    try {
                        postObj.codeSnippetUrl = await minioClient.presignedGetObject(bucketName, fileName, 24 * 60 * 60);
                    } catch (error) {
                        console.error('Error generating signed URL for code snippet:', error);
                        postObj.codeSnippetUrl = null;
                    }
                }

                if (post.fileUrl) {
                    const [bucketName, fileName] = post.fileUrl.split('/');
                    try {
                        postObj.fileUrl = await minioClient.presignedGetObject(bucketName, fileName, 24 * 60 * 60);
                    } catch (error) {
                        console.error('Error generating signed URL for file:', error);
                        postObj.fileUrl = null;
                    }
                }

                return postObj;
            })
        );

        res.status(200).json(postsWithUrl);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving posts", error: error.message });
    }
};
