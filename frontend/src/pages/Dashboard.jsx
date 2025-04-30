import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import StudentDashboard from '../components/dashboard/StudentDashboard';
import InstructorDashboard from '../components/dashboard/InstructorDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">
      {user.role === 'student' && <StudentDashboard />}
      {user.role === 'instructor' && <InstructorDashboard />}
      {user.role === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default Dashboard;
