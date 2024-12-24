# Buddhir Bati - Mini Stack Overflow Clone

This project is a **Mini Stack Overflow Clone** built using the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to ask questions, provide answers, and share resources such as images, PDFs, and code files based on file type.

## Features ✨

- **User Authentication** 🔐: Secure user registration and login.
- **Ask Questions** ❓: Users can post their questions.
- **Provide Answers** 💬: Other users can answer questions.
- **File Uploads** 📁:
  - Save **images** 🖼️, **PDFs** 📄, and **code files** 💻.
  - Automatically categorize code files by type (e.g., `.js`, `.py`, `.java`).
- **MinIO Integration** 🗄️:
  - Efficient and secure storage for uploaded files.
- **Search Functionality** 🔍: Search questions using keywords or tags.
- **Responsive Design** 📱: Fully functional on mobile and desktop.

---

## Tech Stack 🛠️

- **Frontend**: React.js ⚛️
- **Backend**: Node.js, Express.js 🚀
- **Database**: MongoDB 🍃
- **Storage**: MinIO for file storage 🗄️
- **Styling**: Tailwind CSS 🎨
- **Deployment**: (Add your deployment platform, e.g., Heroku, Vercel, AWS) 🌐

---

## File Structure 📂

```plaintext
BUDDHIR_BATI/
├── backend/
│   ├── config/               # Configuration files ⚙️
│   ├── controllers/          # Application logic 🧠
│   ├── jobs/                 # Background jobs ⏳
│   ├── middleware/           # Middleware utilities 🛡️
│   ├── models/               # Database models 🗄️
│   ├── routes/               # API routes 🌐
│   ├── .env                  # Environment variables 🔒
│   ├── app.js                # Application entry point 🚀
│   ├── server.js             # Server setup 🖧
│   ├── package.json          # Backend dependencies 📦
│   ├── package-lock.json     # Dependency lockfile 📑
├── frontend/
│   ├── public/               # Public assets 🌈
│   ├── src/                  # Source code 📜
│   ├── .env                  # Frontend environment variables 🔒
│   ├── index.html            # Frontend entry point 🌟
│   ├── package.json          # Frontend dependencies 📦
│   ├── package-lock.json     # Dependency lockfile 📑
│   ├── tailwind.config.js    # Tailwind CSS configuration 🎨
│   ├── postcss.config.js     # PostCSS configuration 🛠️
│   ├── README.md             # Project documentation 📖
```

# Installation 🛠️

Follow these steps to set up the project locally:

## Prerequisites ✅

- **Node.js** (v14+ recommended)
- **MongoDB** 🍃
- **MinIO** (configured and running)

---

## Steps 🔧

### Clone the Repository:
```bash
git clone https://github.com/your-username/buddhir-bati.git
cd buddhir-bati

