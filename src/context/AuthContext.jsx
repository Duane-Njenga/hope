// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
// Make sure the path to your firebase config file is correct
import { auth, googleProvider, onAuthStateChanged } from '../firebase'; 
import { signInWithPopup, signOut } from 'firebase/auth';

// 1. Create the Context
const AuthContext = createContext();

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // To handle initial loading state

  useEffect(() => {
    // onAuthStateChanged is the core Firebase listener.
    // It automatically detects when a user signs in or out.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      // The `firebaseUser` object contains all user info (displayName, email, photoURL, uid, etc.)
      setUser(firebaseUser);
      // We're done checking the auth state, so we can now show the app.
      setIsLoading(false); 
    });

    // This is a cleanup function that runs when the component unmounts
    // to prevent memory leaks.
    return () => unsubscribe();
  }, []); // The empty dependency array ensures this runs only once on mount.

  // This is the REAL Firebase Google login function
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // After login, the `onAuthStateChanged` listener above will automatically
      // update the `user` state for us.
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  // This is the REAL Firebase logout function
  const logout = async () => {
    try {
      await signOut(auth);
      // After logout, `onAuthStateChanged` will set the user state to null.
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // The value provided to consuming components
  const value = { 
    user,           // This is now the full Firebase user object, or null
    isLoading,      // Use this to show a loading spinner if needed
    loginWithGoogle, 
    logout 
  };

  // Don't render the rest of the app until Firebase has checked the auth state.
  // This prevents a "flash" where the login button shows briefly for a logged-in user.
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook to easily use the context
export const useAuth = () => {
  return useContext(AuthContext);
};