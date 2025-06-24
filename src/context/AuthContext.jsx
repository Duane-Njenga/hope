// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the Context
const AuthContext = createContext(null);

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('hopeconnect_token'));

  // This effect runs when the app loads to check for a persistent session
  useEffect(() => {
    if (token) {
      // In a real app, you would make an API call here to `/api/user/profile`
      // to verify the token and get the user's data.
      // For now, we'll simulate it by creating a mock user.
      console.log("Found a token, attempting to restore session...");
      setUser({ 
        displayName: 'Returning User', 
        photoURL: 'https://i.pravatar.cc/150' // A placeholder avatar
      });
    }
  }, [token]);

  // The login function will be called from the Navbar.
  // In a real app, this is where you'd redirect to your backend's Google auth URL.
  const loginWithGoogle = async () => {
    console.log("Simulating Google Login...");
    // --- THIS IS THE CRITICAL PART ---
    // In your real app, this function would redirect to your Flask backend:
    // window.location.href = 'https://your-backend.onrender.com/auth/google/login';

    // For this demo, we'll simulate a successful login from the backend.
    // The backend would redirect back with a token, which we'd then save.
    const fakeToken = 'fake-jwt-token-from-backend.' + Math.random();
    const mockUser = {
      displayName: 'Claire Kimani', // Mock user data
      email: 'claire.k@example.com',
      photoURL: 'https://i.pravatar.cc/150'
    };
    
    localStorage.setItem('hopeconnect_token', fakeToken);
    setToken(fakeToken);
    setUser(mockUser);
  };

  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem('hopeconnect_token');
    setToken(null);
    setUser(null);
  };

  // The value provided to consuming components
  const value = { user, token, loginWithGoogle, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 3. Create a custom hook to easily use the context
export const useAuth = () => {
  return useContext(AuthContext);
};