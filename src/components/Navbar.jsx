// src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // This effect handles the "click outside to close" functionality
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // This is the definitive "Await and Navigate" pattern to prevent race conditions
  const handleLogout = async () => {
    // Immediately close the dropdown for a good UI response
    setIsDropdownOpen(false); 
    
    try {
      // Pause the function here until Firebase confirms the logout is complete
      await logout();
      
      // AFTER the logout is complete, then navigate the user away.
      navigate('/login');
    } catch (error) {
        console.error("Failed to log out:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="nav-logo">HOPE CONNECT</Link>
        
        <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><Link to="/donate" className="nav-link">Donate</Link></li>
            <li><Link to="/volunteer" className="nav-link">Volunteer</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        
        <div>
          {/* This component only renders for logged-in users, so we can assume `user` exists */}
          {user && (
            <div className="user-menu" ref={dropdownRef}>
              <img 
                src={user.photoURL} 
                alt={user.displayName} 
                style={{ height: '40px', width: '40px', borderRadius: '50%', cursor: 'pointer' }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              />
              
              {isDropdownOpen && (
                <div className="user-dropdown">
                  <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #eee', color: '#666' }}>
                    Signed in as <br/>
                    <strong style={{ color: '#333' }}>{user.displayName}</strong>
                  </div>
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;