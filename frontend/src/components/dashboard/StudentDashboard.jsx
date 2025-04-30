import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../common/Button';
import Card from '../common/Card';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [progress, setProgress] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const coursesRes = await axios.get(`${import.meta.env.VITE_API_URL}/courses/enrolled`, config);
        setEnrolledCourses(coursesRes.data);

        const progressRes = await axios.get(`${import.meta.env.VITE_API_URL}/progress`, config);
        setProgress(progressRes.data);

        const notificationsRes = await axios.get(`${import.meta.env.VITE_API_URL}/notifications`, config);
        setNotifications(notificationsRes.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <Card key={course._id}>
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <Link to={`/courses/${course._id}`}>
                <Button>View Course</Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Progress</h2>
        <div className="space-y-4">
          {progress.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold">{item.course.title}</p>
              <p>Lesson: {item.lesson.title}</p>
              <p>Status: {item.completed ? 'Completed' : 'In Progress'}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification._id} className="bg-white p-4 rounded-lg shadow-md">
              <p>{notification.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(notification.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;