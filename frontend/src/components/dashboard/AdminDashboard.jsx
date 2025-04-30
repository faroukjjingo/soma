import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../common/Button';
import Card from '../common/Card';

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const analyticsRes = await axios.get(`${import.meta.env.VITE_API_URL}/analytics`, config);
        setAnalytics(analyticsRes.data);

        const usersRes = await axios.get(`${import.meta.env.VITE_API_URL}/users`, config);
        setUsers(usersRes.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {analytics && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">System Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl">{analytics.totalUsers}</p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Total Courses</h3>
              <p className="text-2xl">{analytics.totalCourses}</p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Total Enrollments</h3>
              <p className="text-2xl">{analytics.totalEnrollments}</p>
            </Card>
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">Role: {user.role}</p>
              </div>
              <Button
                className="bg-red-500 hover:bg-red-600"
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;