// src/components/AppLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// This component defines the layout for all authenticated pages.
const AppLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {/* The <Outlet> component from react-router-dom will render
            the specific page component for the current route (e.g., Home, About) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;