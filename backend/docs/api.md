Soma API Documentation
Base URL
http://localhost:5000/api
Authentication
Use JWT tokens in the Authorization header: Bearer <token>.
Endpoints
Auth

POST /auth/login
Body: { email, password }
Response: { token, user }


POST /auth/register
Body: { name, email, password, role }
Response: { token, user }


POST /auth/forgot-password
Body: { email }
Response: { message }



Courses

GET /courses
Response: [Course]


GET /courses/:id
Response: Course


POST /courses
Body: { title, description, thumbnail } (multipart/form-data)
Requires: Instructor role
Response: Course


POST /courses/:id/enroll
Requires: Student role
Response: { message }


GET /courses/enrolled
Requires: Student role
Response: [Course]


GET /courses/instructor
Requires: Instructor role
Response: [Course]



Users

GET /users/profile
Requires: Auth
Response: User


PUT /users/profile
Body: { name, email }
Requires: Auth
Response: User



Quizzes

GET /quizzes
Response: [Quiz]


GET /quizzes/:id
Response: Quiz


POST /quizzes
Body: { title, questions }
Requires: Instructor role
Response: Quiz


POST /quizzes/:id/submit
Body: { answers }
Requires: Student role
Response: { score, total }



Progress

GET /progress/:courseId
Requires: Auth
Response: [Progress]


POST /progress/:courseId
Body: { lessonId, completed }
Requires: Auth
Response: Progress



Analytics

GET /analytics
Requires: Admin role
Response: { totalUsers, totalCourses, totalEnrollments }



Notifications

GET /notifications
Requires: Auth
Response: [Notification]


PUT /notifications/:id/read
Requires: Auth
Response: Notification



