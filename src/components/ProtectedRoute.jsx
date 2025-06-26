// src/components/ProtectedRoute.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // 1. If we are still checking for the user, show a loading spinner
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // 2. If there is no user, redirect to the login page
  if (!user) {
    // The `state` prop saves the page the user was trying to access.
    // We can use this to redirect them back after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. If there is a user, render the child components (the actual protected page)
  return children;
};

export default ProtectedRoute;