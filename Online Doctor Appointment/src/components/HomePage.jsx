import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Our Online Doctor Appointment System</h1>
        <p>Quality Healthcare at Your Fingertips</p>
      </header>

      <section className="hospital-info">
        <h2 style={{color:'white'}}>About Our Hospital</h2>
        <div className="info-grid">
          <div className="info-card">
            <img src="hospitalBuilding.jpg" alt="Hospital Building" />
            <h3 style={{color:'black'}}>State-of-the-Art Facility</h3>
            <p>Our modern facility is equipped with the latest medical technology to provide the best care possible.</p>
          </div>

          <div className="info-card">
            <img src="expert.jpg" alt="Medical Team" />
            <h3 style={{color:'black'}}>Expert Medical Team</h3>
            <p>Our team of experienced doctors and medical professionals are dedicated to your wellbeing.</p>
          </div>

          <div className="info-card">
            <img src="emergency_care.png" alt="Emergency Care" />
            <h3 style={{color:'black'}}>24/7 Emergency Care</h3>
            <p style={{color:'black'}}>Round-the-clock emergency services for when you need immediate medical attention.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 style={{color:'white'}}>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-clock"></i>
            <h3 style={{color:'white'}}>Easy Scheduling</h3>
            <p style={{color:'white'}}>Book appointments online at your convenience</p>
          </div>
          
          <div className="feature">
            <i className="fas fa-user-md"></i>
            <h3 style={{color:'white'}}>Specialized Care</h3>
            <p style={{color:'white'}}>Access to multiple medical specialties</p>
          </div>

          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3 style={{color:'white'}}>Patient-Centered</h3>
            <p style={{color:'white'}}>Focused on providing the best patient experience</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2 style={{color:'white'}}>Contact Information</h2>
        <div className="contact-info">
          <p><i className="fas fa-phone"></i> Emergency: 1-800-123-4567</p>
          <p><i className="fas fa-envelope"></i> Email: info@hospital.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Location: 123 Healthcare Ave, Medical City</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
