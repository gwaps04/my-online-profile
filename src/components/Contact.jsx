// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-gradient-footer pt-5 pb-3 text-white">
      <div className="container">
        
        {/* Main Headline */}
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-3">Thank you for viewing my profile</h3>
          <p className="lead opacity-75">I am looking forward to working with you.</p>
        </div>

        <div className="row g-4 mb-5">
          
          {/* Column 1: Developer Info & Contact */}
          <div className="col-lg-4">
            <h5 className="text-uppercase fw-bold text-warning mb-4">Get In Touch</h5>
            
            <p className="mb-1 fw-bold">Developed by:</p>
            <h4 className="fw-bold mb-1">Jason B. Millena</h4>
            <p className="small opacity-75 mb-4">Virtual Operations & Web Specialist</p>

            <div className="contact-details">
              <p className="mb-2">
                <i className="bi bi-envelope-fill footer-icon"></i>
                {/* Updated Email Link to open in new tab */}
                <a 
                  href="mailto:jeisonmillena@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  jeisonmillena@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <i className="bi bi-phone-fill footer-icon"></i>
                <a href="tel:+639563355850" className="text-white text-decoration-none">
                  +63 956 335 5850
                </a>
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill footer-icon"></i>
                Legazpi City, Albay Philippines
              </p>
            </div>
          </div>

          {/* Column 2: Downloadables */}
          <div className="col-lg-4">
            <h5 className="text-uppercase fw-bold text-warning mb-4">Downloadables</h5>
            <div className="d-flex flex-column">
              <a href="https://drive.google.com/file/d/1VmuxaLoeyJbIF3XcBt4zGrSy9OGd2Ojc/view?usp=drive_link" target="_blank" rel="noreferrer" className="footer-link">
                <i className="bi bi-file-earmark-person footer-icon"></i> Download Resume
              </a>
              <a href="https://drive.google.com/file/d/1bPlUgYLpxCsZbtLjilHMeEzbKKM8HzNc/view?usp=drive_link" target="_blank" rel="noreferrer" className="footer-link">
                <i className="bi bi-award footer-icon"></i> EF SET Certificate
              </a>
              <a href="https://drive.google.com/file/d/1etSK4RiHOmmnNeSSrm-48M28UDKVbYaC/view?usp=drive_link" target="_blank" rel="noreferrer" className="footer-link">
                <i className="bi bi-pie-chart footer-icon"></i> DISC & Motivators
              </a>
              <a href="https://drive.google.com/file/d/1DbZ0OcFG0PN8T2vHi3fwj3xYmVwenyyZ/view?usp=drive_link" target="_blank" rel="noreferrer" className="footer-link">
                <i className="bi bi-pc-display footer-icon"></i> My Computer Specs
              </a>
            </div>
          </div>

          {/* Column 3: Character References */}
          <div className="col-lg-4">
            <h5 className="text-uppercase fw-bold text-warning mb-4">Character References</h5>
            
            {/* Reference 1 */}
            <div className="mb-3">
              <h6 className="fw-bold mb-0">Ryan Joshua Bernal Lleno</h6>
              <p className="small text-warning mb-1">ICT Specialist</p>
              <p className="small opacity-75 mb-0">
                <i className="bi bi-phone me-1"></i> 0926.002.0013<br/>
                <i className="bi bi-envelope me-1"></i> llenoryann@gmail.com
              </p>
            </div>

            <hr className="border-secondary" />

            {/* Reference 2 */}
            <div className="mb-3">
              <h6 className="fw-bold mb-0">Rosmarie L. De Leon</h6>
              <p className="small text-warning mb-1">Accounting Assistant</p>
              <p className="small opacity-75 mb-0">
                <i className="bi bi-phone me-1"></i> 0949.801.8181<br/>
                <i className="bi bi-envelope me-1"></i> roseloriodeleon26@gmail.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright (Left) & Quote (Right) */}
        <div className="row pt-4 border-top border-secondary align-items-center">
          
          {/* Copyright Section */}
          <div className="col-md-6 text-center text-md-start">
            <p className="small opacity-50 mb-0">
              &copy; {new Date().getFullYear()} Jason B. Millena. All Rights Reserved.
            </p>
          </div>

          {/* Quote Section (Bottom Right) */}
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <p className="small mb-0 fst-italic text-warning">
              Psalm 37:5: "Commit your way to the LORD; trust in him, and he will act."
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Contact;