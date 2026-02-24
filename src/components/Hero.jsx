// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Column: Photo */}
          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
            <div className="image-container">
              {/* Note: Vite serves public assets from root. 
                  Ensure your file is at project_folder/public/imgs/me.png */}
              <img 
                src="/imgs/me.png" 
                alt="Jason B. Millena" 
                className="img-fluid hero-img" 
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="col-lg-7 text-start ps-lg-5">
            <h5 className="text-uppercase text-muted fw-bold mb-3">
              Hello, I am
            </h5>
            <h1 className="display-4 fw-bold mb-3" style={{ color: '#203a43' }}>
              Jason B. Millena
            </h1>
            <h3 className="h4 mb-4 text-secondary">
              Virtual Operations & Tech Specialist
            </h3>
            
            <p className="lead text-dark mb-4" style={{ lineHeight: '1.8' }}>
              Driven by a passion for operational excellence and tech innovation, I specialize in streamlining business operations through custom web development, smart workflow and AI automations.
            </p>

            {/* Call to Action Buttons */}
            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-primary btn-lg px-4 shadow-sm">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-dark btn-lg px-4 shadow-sm">
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;