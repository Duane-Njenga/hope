import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, googleProvider, onAuthStateChanged } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);   
  const [token, setToken] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const res = await axios.post("http://localhost:5555/auth/firebase-login", {
            mail: firebaseUser.email,
          });

          setToken(res.data.access_token);
          setUser({
            email: firebaseUser.email,
            id: res.data.id,
            role: res.data.role,
          });
        } catch (err) {
          console.error("Backend login failed:", err);
          setUser(null);
          setToken(null);
        }
      } else {
        setUser(null);
        setToken(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setToken(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const value = {
    user,
    token,
    isLoading,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
