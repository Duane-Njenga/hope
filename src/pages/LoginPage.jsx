// src/pages/LoginPage.jsx
import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  const { user, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  // This effect will run when the component mounts or the user state changes.
  // If a user is already logged in, it redirects them away from the login page.
  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to homepage if already logged in
    }
  }, [user, navigate]);

  return (
    // This creates a full-screen container with our brand gradient
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'var(--gradient-main)' // Use the gradient from your CSS
    }}>
      <div style={{
        padding: '3rem 4rem',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 'var(--border-radius)',
        boxShadow: 'var(--shadow-hover)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
          Welcome to Hope Connect
        </h1>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '2.5rem' }}>
          Sign in to continue your journey of giving.
        </p>
        <button className="btn btn-primary" onClick={loginWithGoogle} style={{ fontSize: '1.2rem', padding: '1rem 2rem', display: 'flex', alignItems: 'center', margin: '0 auto' }}>
          <FaGoogle style={{ marginRight: '1rem' }} />
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;