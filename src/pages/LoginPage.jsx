import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, loginWithGoogle } = useAuth();

  // Mock authentication functions - replace with your actual implementation
  
  const emailPasswordLogin = async (email, password) => {
    // Mock implementation - replace with actual login logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ email });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  ;

  const navigate = useNavigate()
    
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await emailPasswordLogin(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="p-8 md:p-12 bg-white rounded-2xl shadow-xl text-center max-w-md w-full">
        
        <h1 className="font-serif text-3xl md:text-4xl text-blue-600 mb-2">
          Welcome to Hope Connect
        </h1>

        <p className="text-gray-600 mb-8">
          Sign in to continue your journey of giving.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              required
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-12 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing In...
              </>
            ) : (
              <>
                <FaSignInAlt className="w-4 h-4" />
                Sign In
              </>
            )}
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <button
          onClick={loginWithGoogle}
          disabled={loading}
          className="flex items-center justify-center gap-3 bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed mb-6"
        >
          <FaGoogle className="w-4 h-4" onclick={loginWithGoogle} />
          Sign In with Google
        </button>

        <p className="text-gray-600 text-sm">
          Don't have an account?{' '}
          <button 
            onClick={() => navigate('/register')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;