
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import DonatePage from './pages/Donate';
import VolunteerPage from './pages/Volunteer';
import ContactPage from './pages/Contact';
// ===============================================

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* This div structure helps create a "sticky footer" layout */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          
          {/* The main content area will grow to fill the space */}
          <main style={{ flexGrow: 1 }}>
            <Routes>
              {/* === CONNECTING URLS TO COMPONENTS === */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ======================================= */}
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;