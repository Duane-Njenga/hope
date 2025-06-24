// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import our providers and new components
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './components/AppLayout';

// Import all pages
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import DonatePage from './pages/Donate';
import VolunteerPage from './pages/Volunteer';
import ContactPage from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ====================================================== */}
          {/*                 PUBLIC ROUTE (Login Page)              */}
          {/* ====================================================== */}
          {/* Anyone can access this route. */}
          <Route path="/login" element={<LoginPage />} />


          {/* ====================================================== */}
          {/*                PROTECTED ROUTES                        */}
          {/* ====================================================== */}
          {/* The user must pass the ProtectedRoute check to access these. */}
          {/* If they pass, the AppLayout is rendered, which includes */}
          {/* the Navbar, Footer, and an <Outlet> for the child routes. */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            {/* These routes are nested inside the AppLayout */}
            {/* The `index` route is the default child for "/" */}
            <Route index element={<Home />} /> 
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="donate" annd donate element={<DonatePage />} />
            <Route path="volunteer" element={<VolunteerPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;