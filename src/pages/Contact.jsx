// src/pages/Contact.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <AnimatedSection>
                <section className="page-section">
                    <div className="container text-center">
                        <h1 style={{ fontSize: '3.5rem' }}>Get In Touch</h1>
                        <p className="text-center" style={{ fontSize: '1.25rem', maxWidth: '45rem', margin: '1rem auto 0', color: 'var(--color-text-light)' }}>
                            We'd love to hear from you. Whether you have a question, a suggestion, or want to partner with us, please reach out.
                        </p>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="page-section" style={{paddingTop: 0}}>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
                        <div style={{backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)'}}>
                            <h2 style={{border: 'none', padding: 0, marginBottom: '2rem'}}>Contact Information</h2>
                            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <FaMapMarkerAlt style={{fontSize: '1.5rem', color: 'var(--color-secondary)', marginRight: '1rem'}} />
                                <div><strong>Address:</strong><br/>123 Hope Street, Nairobi, Kenya</div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <FaEnvelope style={{fontSize: '1.5rem', color: 'var(--color-secondary)', marginRight: '1rem'}} />
                                <div><strong>Email:</strong><br/>connect@hopeconnect.org</div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FaPhone style={{fontSize: '1.5rem', color: 'var(--color-secondary)', marginRight: '1rem'}} />
                                <div><strong>Phone:</strong><br/>+254 700 123 456</div>
                            </div>
                        </div>

                        <div className="form-container" style={{boxShadow: 'var(--shadow-md)'}}>
                            <h2 style={{border: 'none', padding: 0, marginBottom: '2rem'}}>Send Us a Message</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="contact-name" className="form-label">Your Name</label>
                                    <input type="text" id="contact-name" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-email" className="form-label">Your Email</label>
                                    <input type="email" id="contact-email" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-message" className="form-label">Message</label>
                                    <textarea id="contact-message" rows="5" className="form-textarea" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-gradient submit-button">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default ContactPage;