// src/components/ProtectedRoute.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // 1. If we are still checking for the user, show nothing (or a loading spinner)
  if (isLoading) {
    return null; // Or <LoadingSpinner />
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