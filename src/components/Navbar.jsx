// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // <-- CORRECT: Use our custom auth hook
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, loginWithGoogle, logout } = useAuth(); // <-- CORRECT: Get state and functions from our context

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="nav-logo">HOPE CONNECT</Link>
        
        <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><Link to="/volunteer" className="nav-link">Volunteer</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li><Link to="/donate" className="nav-donate-btn">Donate Now</Link></li>
        </ul>
        
        <div style={{ position: 'relative' }}>
          {user ? (
            // User is logged in
            <div className="user-menu">
              <img 
                src={user.photoURL} 
                alt={user.displayName} 
                style={{ height: '40px', width: '40px', borderRadius: '50%', cursor: 'pointer' }}
              />
              <div className="user-dropdown">
                <p style={{padding: '8px 12px', borderBottom: '1px solid #eee'}}>{user.displayName}</p>
                <button onClick={logout} className="logout-button">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // User is logged out
            <button onClick={loginWithGoogle} className="login-button">
              <FaGoogle style={{ marginRight: '8px' }} />
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;