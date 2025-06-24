// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  const { user, loginWithGoogle, logout } = useAuth();

  // --- NEW CODE ---
  // State to manage whether the dropdown is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Ref to the dropdown container to detect clicks outside of it
  const dropdownRef = useRef(null);

  // This effect handles the "click outside to close" functionality
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the dropdown exists and the click was outside of it...
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // ...close the dropdown.
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // The empty array ensures this effect runs only once

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false); // Close dropdown after logging out
  };
  // --- END OF NEW CODE ---

  // Note: We are not using the 'isScrolled' logic from the old version
  // because the new design has a permanently solid navbar.

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
        
        {/* --- MODIFIED AUTH SECTION --- */}
        <div>
          {user ? (
            // User is logged in - show the user menu
            <div className="user-menu" ref={dropdownRef}>
              <img 
                src={user.photoURL} 
                alt={user.displayName} 
                style={{ height: '40px', width: '40px', borderRadius: '50%', cursor: 'pointer' }}
                // Toggle the dropdown when the image is clicked
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              />
              
              {/* Conditionally render the dropdown based on state */}
              {isDropdownOpen && (
                <div className="user-dropdown">
                  <p style={{padding: '8px 12px', borderBottom: '1px solid #eee', color: '#666'}}>
                    Signed in as <br/>
                    <strong style={{color: '#333'}}>{user.displayName}</strong>
                  </p>
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // User is logged out - show the login button
            <button onClick={loginWithGoogle} className="login-button">
              <FaGoogle />
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;