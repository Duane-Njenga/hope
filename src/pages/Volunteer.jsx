// src/pages/Volunteer.jsx
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const VolunteerPage = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', age: '', location: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.age < 18) {
            alert("Volunteers must be at least 18 years old.");
            return;
        }
        console.log("Volunteer Sign-up:", formData);
        alert("Thank you for your interest! We will be in touch soon.");
        setFormData({ name: '', phone: '', email: '', age: '', location: '' });
    };

    return (
        <div style={{ paddingTop: '80px' }}>
            <AnimatedSection>
                <section className="page-section">
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ fontSize: '3.5rem' }}>Become a Hero</h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                Your time and skills are invaluable. Join our team of dedicated volunteers and be the change you want to see in the world.
                            </p>
                            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Volunteers working" style={{ width: '100%', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-lg)' }}/>
                        </div>
                        <div className="form-container">
                            <h2 className="text-center" style={{border: 'none', padding: 0, marginBottom: '2rem'}}>Volunteer Sign-up</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="form-input" required />
                                </div>
                                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                                    <div className="form-group">
                                        <label htmlFor="age" className="form-label">Age</label>
                                        <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} className="form-input" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location" className="form-label">Location (City)</label>
                                        <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} className="form-input" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-gradient submit-button">
                                    Join Us
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default VolunteerPage;