// src/pages/About.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaHeart, FaHandsHelping, FaBullseye } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '80px' }}> {/* Add padding to clear the fixed navbar */}
      <AnimatedSection>
        <section className="page-section">
          <div className="container text-center">
            <h1 style={{ fontSize: '3.5rem' }}>Our Story</h1>
            <p className="text-center" style={{ fontSize: '1.25rem', maxWidth: '45rem', margin: '1rem auto 0', color: 'var(--color-text-light)' }}>
              A Commitment to Humanity
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="page-section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hope Connect Team" style={{ width: '100%', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div>
              <h2>From a Simple Idea to a Global Movement</h2>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                Hope Connect was born from a simple yet powerful idea: that no one should feel helpless or alone. We saw the gaps in support for refugees, orphans, and those affected by war and knew that technology and compassion could bridge them.
              </p>
              <p style={{ color: 'var(--color-text-light)' }}>
                Our platform was created to be more than just a website; it's a dynamic hub for connection, a lifeline for those in need, and a clear path for those who wish to give. We empower local heroes and global supporters to come together and create real, lasting change.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
        <section className="page-section" style={{ backgroundColor: 'var(--color-white)' }}>
          <div className="container text-center">
            <h2>Our Core Values</h2>
            <div className="features-grid">
              <div className="feature-card">
                <FaHeart className="feature-card-icon" />
                <h3>Compassion</h3>
                <p>We lead with empathy, ensuring every action is rooted in kindness and understanding for the people we serve.</p>
              </div>
              <div className="feature-card">
                <FaHandsHelping className="feature-card-icon" />
                <h3>Connection</h3>
                <p>We believe in the power of community. We bridge the gap between those who need help and those who can provide it.</p>
              </div>
              <div className="feature-card">
                <FaBullseye className="feature-card-icon" />
                <h3>Impact</h3>
                <p>We are committed to delivering tangible results, ensuring that every donation and volunteer hour creates a positive impact.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;