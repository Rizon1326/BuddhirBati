// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../utils/axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const signin = async (email, password) => {
    try {
      const response = await api.post('/auth/signin', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setUser({ token });
      return true;
    } catch (error) {
      throw error;
    }
  };

  const signup = async (email, password) => {
    try {
      const response = await api.post('/auth/signup', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setUser({ token });
      return true;
    } catch (error) {
      throw error;
    }
  };

  const signout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};