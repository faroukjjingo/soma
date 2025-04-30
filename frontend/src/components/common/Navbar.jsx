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
</xaiArtefact>

### src/components/common/Footer.jsx
<xaiArtifact artifact_id="a09aa6fe-91af-47c4-a4ff-b6a49821d14e" artifact_version_id="dc689a56-f8df-4991-9a76-84b644c610a4" title="Footer.jsx" contentType="text/jsx">
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Soma. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;