
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header>
        <div className="container">
          <h1>Your Company Name</h1>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to="/login" className="nav-button">Internal Portal</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Welcome to Your Company</h2>
          <p>Your company description and value proposition here.</p>
          <Link to="/login" className="button">Access Internal Tools</Link>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Information about your company, mission, and values.</p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Service 1</h3>
              <p>Description of service 1.</p>
            </div>
            <div className="service-item">
              <h3>Service 2</h3>
              <p>Description of service 2.</p>
            </div>
            <div className="service-item">
              <h3>Service 3</h3>
              <p>Description of service 3.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Your company contact information.</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
