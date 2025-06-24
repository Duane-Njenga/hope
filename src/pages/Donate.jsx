// src/pages/Donate.jsx
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const DonatePage = () => {
  const [donationType, setDonationType] = useState('money');
  const [recipientGroup, setRecipientGroup] = useState('refugees');
  const [formData, setFormData] = useState({ amount: '', description: '', name: '', email: '' });
  
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted!", { donationType, recipientGroup, ...formData });
      alert("Thank you for your generosity! (This is a demo)");
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <AnimatedSection>
        <section className="page-section">
          <div className="container">
            <div className="text-center">
              <h1 style={{fontSize: '3.5rem'}}>Make a Donation</h1>
              <p style={{maxWidth: '40rem', margin: '1rem auto 2.5rem auto', color: 'var(--color-text-light)', fontSize: '1.25rem'}}>Your contribution, no matter the size, creates a world of difference.</p>
            </div>

            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <h2>1. Choose Donation Type</h2>
                <div className="filter-grid">
                  {['money', 'food', 'clothes', 'other'].map(type => (
                    <button key={type} type="button" onClick={() => setDonationType(type)} className={`filter-button ${donationType === type ? 'active' : ''}`}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <h2>2. Choose Recipient Group</h2>
                <div className="filter-grid">
                  {['refugees', 'orphans', 'street people', 'war-affected'].map(group => (
                    <button key={group} type="button" onClick={() => setRecipientGroup(group)} className={`filter-button ${recipientGroup === group ? 'active' : ''}`}>
                      {group}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <h2>3. Donation Details</h2>
                {donationType === 'money' ? (
                  <div>
                    <label htmlFor="amount" className="form-label">Amount (e.g., in KES for M-Pesa)</label>
                    <input type="number" name="amount" id="amount" value={formData.amount} onChange={handleInputChange} className="form-input" placeholder="e.g., 1000" required/>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="description" className="form-label">Describe your donation (e.g., "Winter jackets, kids sizes")</label>
                    <textarea name="description" id="description" value={formData.description} onChange={handleInputChange} rows="3" className="form-textarea" required></textarea>
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <h2>4. Your Details</h2>
                 <div className="form-group" style={{marginBottom: '1rem'}}>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input" placeholder="Your Name" required/>
                 </div>
                 <div className="form-group" style={{marginBottom: 0}}>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" placeholder="Your Email" required/>
                 </div>
              </div>
              
              <button type="submit" className="btn btn-gradient submit-button">
                Proceed with Donation
              </button>
            </form>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default DonatePage;