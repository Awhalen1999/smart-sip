import React, { createContext, useContext, useState, useEffect } from 'react';
import { authUser, loginUser, registerUser, logoutUser } from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticatedUser = await authUser();
        setUser(authenticatedUser);
      } catch (error) {
        console.error('Error authenticating user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const loggedInUser = await loginUser(email, password);
      setUser(loggedInUser);
      console.log('User state after login:', loggedInUser);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const signup = async (username, email, password) => {
    try {
      const registeredUser = await registerUser(username, email, password);
      setUser(registeredUser);
      console.log('User state after signup:', registeredUser);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      console.log('User state after logout:', null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  console.log('Current user state:', user);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
