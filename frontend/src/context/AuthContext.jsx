import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { login as loginApi, register as registerApi, logout as logoutApi } from '../services/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Simulate fetching user data
      setUser({ name: 'User', email: 'user@example.com', role: 'student' }); // Replace with actual API call
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const response = await loginApi(credentials);
    localStorage.setItem('token', response.token);
    setUser(response.user);
  };

  const register = async (userData) => {
    const response = await registerApi(userData);
    localStorage.setItem('token', response.token);
    setUser(response.user);
  };

  const logout = () => {
    logoutApi();
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
