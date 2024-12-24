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
---
# Installation 🛠️

Follow these steps to set up the project locally:

## Prerequisites ✅

- **Node.js** (v14+ recommended)
- **MongoDB** 🍃
- **MinIO** (configured and running)

---
---
## Steps 🔧

### Clone the Repository:

git clone https://github.com/Rizon1326/BuddhirBati.git
cd BuddhirBati
Here’s the markdown with icons and headers for better readability:

# Installation 🛠️

Follow these steps to set up the project locally:

---

## Prerequisites ✅

- **Node.js** (v14+ recommended) 🖥️  
- **MongoDB** 🍃  
- **MinIO** (configured and running) 🗄️  

---

## Steps 🔧

### 1️⃣ Clone the Repository 🗂️
```bash
git clone https://github.com/your-username/buddhir-bati.git
cd buddhir-bati
```

---

### 2️⃣ Install Dependencies 📦

#### Backend:
```bash
cd backend
npm install
```

#### Frontend:
```bash
cd ../frontend
npm install
```

---

### 3️⃣ Set Up Environment Variables 🔒

#### Create `.env` Files:
- Add a `.env` file in the **backend** folder:
```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.<region>.mongodb.net/<databaseName>?retryWrites=true&w=majority&appName=<appName>

# JWT Configuration
JWT_SECRET=<your_jwt_secret_key>

# Server Port
PORT=5000

# MinIO Configuration
MINIO_ENDPOINT=<minio_endpoint>         # Change to MinIO server's IP if not local
MINIO_PORT=<minio_port>                 # Verify the port; default is usually 9000
MINIO_ACCESS_KEY=<minio_access_key>
MINIO_SECRET_KEY=<minio_secret_key>
MINIO_BUCKET=<bucket_name>
MINIO_USE_SSL=<true_or_false>           # Set to true if using HTTPS
```
---

### 4️⃣ Start Development Servers 🚀

#### Backend:
```bash
cd backend
npm start
```

#### Frontend:
```bash
cd ../frontend
npm start
```

---

### 5️⃣ Visit the Application 🌐

- **Backend API**: 
- **Frontend**:

---

## After Installation 🎉

Once the application is installed and running, follow these steps:

### 1️⃣ Set Up a Test User Account 👤
- Visit the signup page:  
- Create a new account.

---

### 2️⃣ Post a Question ❓
- Log in to your account.  
- Navigate to the "Ask Question" section.  
- Post a question.

---

### 3️⃣ Upload Files 📂
- While asking or answering a question, upload:
  - **Images** 🖼️  
  - **PDFs** 📄  
  - **Code files** 💻 (e.g., `.js`, `.py`, `.java`).

---

### 4️⃣ Answer a Question 💬
- Go to a posted question.  
- Provide an answer.

---

### 5️⃣ Search Questions 🔍
- Use the search bar to find questions using keywords or tags.

---

### 6️⃣ Check File Storage 🗄️
- Verify that uploaded files are stored in MinIO under the respective buckets (images, PDFs, code files).

---

## Future Enhancements 🚀

- Add **real-time notifications** for answers and comments 📢.  
- Implement a **reputation system** for users 🏆.  
- Add a **rich-text editor** for better question and answer formatting 📝.  


## Contributors 🤝

- **Your Name** - [GitHub Profile](https://github.com/Rizon1326)
```

Hello 👋

```

