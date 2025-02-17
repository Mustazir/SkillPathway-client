# ![LearnBridge Banner](Screenshot_11.png)
![RideFlow Banner](/Screenshot_14.png)
# Collaborative Study Platform

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
## Website Features

- **User Registration & Login**: 
  - Students, Tutors, and Administrators can register and log in to the platform.
  - Social login via Google and GitHub is also supported (students by default).

- **Role-Based Access Control**: 
  - Students, Tutors, and Admins have different levels of access, ensuring each user type only has access to appropriate features.
  - Admin can manage users and approve/reject study sessions.

- **Study Sessions**: 
  - Students can browse available sessions, view session details, and book them (paid or free).
  - Tutors can create study sessions, manage session details, and upload materials.
  - Admin can approve or reject study sessions and manage users.

- **Dashboard**:
  - **Student Dashboard**: View booked sessions, create and manage personal notes, and access study materials for booked sessions.
  - **Tutor Dashboard**: Create study sessions, upload study materials, and manage sessions.
  - **Admin Dashboard**: View and manage all users, sessions, and materials.

- **Responsive Design**:
  - The platform is fully responsive, ensuring an optimized experience on mobile, tablet, and desktop devices.

- **Real-time Notifications**: 
  - Sweet alert notifications for CRUD operations, login/signup success, and booking confirmation.

- **Secure Authentication**:
  - JWT-based authentication for login.
  - Secure token storage in localStorage for session management.

- **Pagination**: 
  - Implemented pagination on two different pages to manage large datasets.

- **Environment Variables**:
  - Firebase config and MongoDB credentials are stored securely in environment variables.

- **Payment Integration**:
  - For paid study sessions, users can proceed to a payment page after clicking "Book Now."

- **Reviews and Ratings**:
  - Students can rate and review sessions after attending.

---

## Admin Credentials

- **Admin Username**: admin@studyplatform.com
- **Admin Password**: admin123

---

## Front-end Live Site Link
SkillPathWay
[SkillPathWay](https://skillpathway-f76f5.web.app/)

---

## GitHub Repositories

### Client Side:
- **GitHub Repository Link**: [Client Side Repo](https://github.com/Mustazir/SkillPathway-client.git)

### Server Side:
- **GitHub Repository Link**: [Server Side Repo](https://github.com/Mustazir/SkillPathway-server.git)

---

## Technologies Used

- **Frontend**: React, Tailwind CSS, React Router, Tanstack Query, Axios
- **Backend**: Node.js, Express, MongoDB, JWT, Firebase Authentication
- **Payment**: Integrated payment for paid sessions
- **Version Control**: Git & GitHub for source code management

---

## Setup Instructions

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a `.env` file for environment variables, including your Firebase and MongoDB credentials.
4. Start the backend server: 
   - Run `npm start` in the server directory.
5. Start the frontend application:
   - Run `npm start` in the client directory.
6. Visit `http://localhost:3000` to view the application locally.

---

## Notes

- Ensure the database collections are properly set up as mentioned in the project requirements.
- The frontend and backend are connected through API requests to handle sessions, bookings, and user management.
- Follow the project requirements strictly to ensure all functionality is implemented correctly.

---

### Acknowledgements

- Thanks to the open-source community for the libraries and tools used in this project.


