require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

// Enable CORS for requests from port 5173
app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    });

// Routes
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use('/notification', notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
