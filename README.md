# Soma - Comprehensive Learning Management System

Welcome to **Soma**, a full-featured Learning Management System (LMS) designed to empower educators, students, and administrators with a seamlessly modern platform for online learning. Soma supports course creation, user management, quizzes, progress tracking, real-time notifications, and analytics. These are all wrapped in a scalable and user-friendly package. This project is hosted on GitHub at [jjingofarouk/soma](https://github.com/jjingofarouk/soma).

This README provides everything you need to understand, set up, and contribute to Soma. Are you a developer, educator, or curious contributor? There's something you can contribute!

---

## Table of Contents

1. Features  
2. Tech Stack  
3. Project Structure  
4. Prerequisites  
5. Setup Instructions  
   - Backend Setup  
   - Frontend Setup  
   - Docker Setup  
6. Environment Variables  
7. Running the Application  
8. Testing  
9. API Documentation  
10. Contributing  
11. License  
12. Contact  

---

## Features

Soma is packed with features to make online learning engaging and efficient:

- **User Management**: Supports multiple roles (Admin, Instructor, Student) with secure authentication and authorization.  
- **Course Management**: Create, update, and manage courses with lessons, videos, and documents.  
- **Quizzes & Assessments**: Build interactive quizzes with instant feedback and results tracking.  
- **Progress Tracking**: Monitor student progress through courses and lessons.  
- **Real-Time Notifications**: Get updates on course enrollments, quiz results, and more via WebSockets.  
- **Analytics Dashboard**: Admins and instructors can view detailed analytics on user engagement and performance.  
- **File Uploads**: Store course materials (videos, PDFs, etc.) securely in cloud storage (e.g., AWS S3).  
- **Responsive Frontend**: A modern, accessible UI built with React and Tailwind CSS.  
- **Scalable Backend**: Powered by Node.js and Express.js, with support for both SQL and NoSQL databases.  
- **Real-Time Features**: Live chat and notifications for interactive learning experiences.  
- **Role-Based Access**: Fine-grained permissions for different user types.  
- **Testing**: Comprehensive unit and integration tests for backend and frontend.  

---

## Tech Stack

### Backend

- **Node.js with Express.js**: Fast and asynchronous backend framework.  
- **MongoDB (or PostgreSQL)**: Flexible NoSQL or relational database for storing user and course data.  
- **AWS S3**: Cloud storage for course materials and user uploads.  
- **Socket.IO**: Real-time communication for notifications and live features.  
- **JWT**: Secure authentication with JSON Web Tokens.  
- **Jest**: Testing framework for unit and integration tests.  
- **Docker**: Containerization for consistent development and deployment.  

### Frontend

- **React**: Component-based UI library for a dynamic user experience.  
- **Vite**: Lightning-fast build tool for frontend development.  
- **Tailwind CSS**: Utility-first CSS framework for responsive design.  
- **React Router**: Client-side routing for seamless navigation.  
- **Axios**: HTTP client for API requests.  
- **Vitest**: Testing framework for frontend components.  
- **ESLint**: Code linting for consistent code quality.  

### DevOps

- **Docker Compose**: Orchestrates backend, frontend, and database services.  
- **GitHub Actions (optional)**: CI/CD pipeline for automated testing and deployment.  

---

## Project Structure

The project is organized into two main directories: `backend` and `frontend`, with shared documentation at the root.

lms/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   ├── config/
│   │   ├── models/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── sockets/
│   │   └── app.js
│   ├── tests/
│   ├── scripts/
│   ├── public/
│   ├── docs/
│   ├── .env
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── routes.jsx
│   ├── tests/
│   ├── .env
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── docs/
├── docker-compose.yml
├── .gitignore
├── README.md
└── package.json

---

## Prerequisites

Before setting up Soma, ensure you have the following installed:

- Node.js (v18 or higher): [Download](https://nodejs.org)  
- npm (v9 or higher): Comes with Node.js  
- MongoDB (local or MongoDB Atlas): [Setup Guide](https://docs.mongodb.com/manual/installation/)  
- Docker (optional, for containerized setup): [Download](https://www.docker.com)  
- AWS Account (for S3 storage): [Sign Up](https://aws.amazon.com)  
- Git: [Download](https://git-scm.com)  
- A code editor like [VS Code](https://code.visualstudio.com) (recommended)  

---

## Setup Instructions

### Cloning the Repository

```bash
git clone https://github.com/jjingofarouk/soma.git
cd soma

Backend Setup

	1.	Navigate to the backend directory:

cd backend

	2.	Install dependencies:

npm install

	3.	Create a .env file:

cp .env.example .env

	4.	Set up MongoDB:

	•	For local MongoDB, ensure the service is running (mongod).
	•	For MongoDB Atlas, update the MONGO_URI in .env.

	5.	Run database migrations and seed data (if applicable):

node scripts/migrate.js
node scripts/seed.js

Frontend Setup

	1.	Navigate to the frontend directory:

cd frontend

	2.	Install dependencies:

npm install

	3.	Create a .env file:

cp .env.example .env

	4.	Update VITE_API_URL in .env to point to your backend API (e.g., http://localhost:5000/api).

Docker Setup (Optional)

	1.	Ensure Docker and Docker Compose are installed.
	2.	From the root directory, build and run the containers:

docker-compose up --build

	3.	Access the app at:

	•	Frontend: http://localhost:3000
	•	Backend API: http://localhost:5000

Environment Variables

Backend (backend/.env)

PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/soma
# or: MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/soma
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_region
AWS_S3_BUCKET=your_bucket_name
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_password

Frontend (frontend/.env)

VITE_API_URL=http://localhost:5000/api
VITE_WS_URL=ws://localhost:5000
VITE_ENV=development

Running the Application

Backend

cd backend
npm run dev
# Runs on http://localhost:5000/api

Frontend

cd frontend
npm run dev
# Runs on http://localhost:3000

Docker

docker-compose up

Testing

Backend Tests

cd backend
npm run test

Frontend Tests

cd frontend
npm run test

API Documentation

Detailed API documentation is available in backend/docs/api.md. Key endpoints include:
	•	Auth: /api/auth/login, /api/auth/register, /api/auth/forgot-password
	•	Courses: /api/courses, /api/courses/:id, /api/courses/:id/lessons
	•	Quizzes: /api/quizzes, /api/quizzes/:id, /api/quizzes/:id/submit
	•	Users: /api/users, /api/users/:id, /api/users/profile
	•	Progress: /api/progress, /api/progress/:courseId
	•	Notifications: /api/notifications, /api/notifications/:id
	•	Analytics: /api/analytics/course/:id, /api/analytics/user/:id

Use tools like Postman or Swagger to explore the API. Run the backend and visit /api/docs for Swagger UI (if implemented).

Contributing

We welcome contributions to Soma! To contribute:
	1.	Fork the repository: jjingofarouk/soma
	2.	Create a feature branch:

git checkout -b feature/your-feature

	3.	Commit your changes:

git commit -m "Add your feature"

	4.	Push to your fork:

git push origin feature/your-feature

	5.	Open a Pull Request with a clear description of your changes.

Please follow the coding standards (ESLint for frontend, Prettier for backend) and include tests for new features.

License

Soma is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the license terms.

Contact

Got questions or ideas? Reach out to me on GitHub: jjingofarouk.
You can also open an issue on the repository for bugs, feature requests, or discussions.

Happy learning with Soma!

If you run into issues or need clarification, check the docs/ folder or file an issue on GitHub.
Let’s build an LMS that transforms education together!

