import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../common/Button';
import Card from '../common/Card';

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const coursesRes = await axios.get(`${import.meta.env.VITE_API_URL}/courses/instructor`, config);
        setCourses(coursesRes.data);

        const analyticsRes = await axios.get(`${import.meta.env.VITE_API_URL}/analytics`, config);
        setAnalytics(analyticsRes.data);
      } catch (error) {
        console.error('Error fetching instructor data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Instructor Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course._id}>
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <Link to={`/courses/${course._id}`}>
                <Button>Manage Course</Button>
              </Link>
            </Card>
          ))}
        </div>
        <Link to="/courses/create">
          <Button className="mt-4">Create New Course</Button>
        </Link>
      </section>

      {analytics && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-semibold">Total Courses</h3>
              <p className="text-2xl">{analytics.totalCourses}</p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Total Enrollments</h3>
              <p className="text-2xl">{analytics.totalEnrollments}</p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl">{analytics.totalUsers}</p>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
};

export default InstructorDashboard;