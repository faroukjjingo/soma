import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Button from './Button';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Soma
        </Link>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-gray-200">
                Dashboard
              </Link>
              <Link to="/courses" className="hover:text-gray-200">
                Courses
              </Link>
              <Link to="/profile" className="hover:text-gray-200">
                Profile
              </Link>
              <Button onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-200">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


