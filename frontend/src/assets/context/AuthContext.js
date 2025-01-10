import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user data from localStorage (if available) on initial load
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Function to handle login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Persist user data
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear user data from localStorage
  };

  // Clear user session if data becomes invalid (optional)
  useEffect(() => {
    const checkSessionValidity = () => {
      if (user && !isValidSession(user)) {
        logout();
      }
    };
    checkSessionValidity();
  }, [user]);

  // Optional session validation logic (replace with your own)
  const isValidSession = (user) => {
    // Example: check if token or user info is still valid
    return true; // Always valid for now
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to Use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
