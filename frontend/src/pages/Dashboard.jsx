import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import StudentDashboard from '../components/dashboard/StudentDashboard';
import InstructorDashboard from '../components/dashboard/InstructorDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {user.role === 'student' && <StudentDashboard />}
      {user.role === 'instructor' && <InstructorDashboard />}
      {user.role === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default Dashboard;
