// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection'; // This reusable component still works perfectly!

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            HOPE CONNECT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}>
            Bridging hearts, building futures. We connect generosity with need.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <AnimatedSection>
        <section className="page-section" style={{ backgroundColor: 'var(--color-light-bg)' }}>
          <div className="container text-center">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-light-text)', maxWidth: '45rem', margin: '0 auto' }}>
              To build a responsive and engaging platform that empowers NGOs and individuals to provide immediate, effective, and heartfelt support.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Other sections would follow this pattern */}
    </div>
  );
};

export default HomePage;