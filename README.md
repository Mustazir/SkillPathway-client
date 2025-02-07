# ![LearnBridge Banner](Screenshot_11.png)

# LearnBridge - Collaborative Study Platform 📚💡

LearnBridge is an interactive and engaging platform that connects students, tutors, and administrators to streamline study session scheduling, resource sharing, and user management. It enhances collaboration, improves access to study materials, and ensures effective management of educational activities.

## 🚀 Features

### 🔑 User Registration & Login
- Students, Tutors, and Administrators can register and log in securely.
- Social login support via **Google and GitHub** (students by default).

### 🔐 Role-Based Access Control
- **Students**: Book sessions, access materials, leave reviews.
- **Tutors**: Create & manage study sessions, upload materials.
- **Admins**: Approve/reject sessions, manage users & content.

### 📅 Study Sessions
- Students can browse available sessions, view details, and book them (paid or free).
- Tutors can create study sessions and upload study materials.
- Admins have the authority to approve or reject study sessions.

### 📊 Dashboard Views
- **Student Dashboard**: View bookings, manage notes, and access study materials.
- **Tutor Dashboard**: Create sessions, upload materials, and track engagement.
- **Admin Dashboard**: Manage users, sessions, and study materials.

### 📱 Responsive Design
- Fully optimized for mobile, tablet, and desktop devices.

### 🔔 Real-time Notifications
- SweetAlert notifications for important actions such as login success, session booking, and payment confirmation.

### 🔒 Secure Authentication
- **JWT-based authentication** for secure login and session management.
- Secure token storage in `localStorage`.

### 📌 Pagination & Performance
- Implemented pagination to efficiently handle large datasets on two different pages.

### 🔐 Environment Variables
- Sensitive data (Firebase credentials, MongoDB connection) stored securely in `.env` file.

### 💳 Payment Integration
- Secure payment gateway for **paid study sessions**.

### ⭐ Reviews & Ratings
- Students can rate and review sessions they have attended.

## 📌 Admin Credentials
```
Admin Username: admin@studyplatform.com
Admin Password: admin123
```

## 🌐 Live Demo
[![LearnBridge Live](https://img.shields.io/badge/Live%20Demo-Click%20Here-blue)](https://learnbridge-6f2b3.web.app/)

## 📂 GitHub Repositories

### 🔹 Client Side
[![GitHub Repo](https://img.shields.io/badge/GitHub-Client-blue?logo=github)](https://github.com/Mustazir/SkillPathway-client.git)

### 🔹 Server Side
[![GitHub Repo](https://img.shields.io/badge/GitHub-Server-blue?logo=github)](https://github.com/Mustazir/SkillPathway-server.git)

## 🛠️ Technologies Used

| **Category** | **Technologies** |
|-------------|----------------|
| **Frontend** | React, Tailwind CSS, React Router, TanStack Query, Axios |
| **Backend** | Node.js, Express, MongoDB, JWT, Firebase Authentication |
| **Payment** | Stripe API for secure transactions |
| **Version Control** | Git & GitHub |

## 📖 Installation Guide

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repository-url.git
cd your-project-folder
```

### 2️⃣ Install Dependencies
```sh
npm install # For both frontend & backend
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the necessary credentials:
```sh
FIREBASE_API_KEY=your_api_key
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Backend Server
```sh
cd server
npm start
```

### 5️⃣ Run Frontend
```sh
cd client
npm start
```

### 6️⃣ Access the Application
Visit `http://localhost:3000` in your browser.

## 📌 Folder Structure
```
LearnBridge/
├── client/             # React Frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.jsx
├── server/             # Node.js Backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── server.js
├── .env                # Environment Variables
├── package.json        # Dependencies
├── README.md           # Documentation
└── LICENSE             # License File
```

## 🤝 Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m 'Added a new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Submit a pull request 🚀

## 🎉 Acknowledgements
Thanks to the **open-source community** and various **libraries & frameworks** used in this project!

---

🔗 **Stay Connected**  
📧 Email: support@learnbridge.com  
🌐 Website: [LearnBridge](https://learnbridge-6f2b3.web.app/)
