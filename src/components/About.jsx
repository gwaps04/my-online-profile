// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gradient-cool py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Column: Text Content */}
          <div className="col-lg-7 order-2 order-lg-1 pe-lg-5 about-text">
            <h5 className="text-warning text-uppercase fw-bold mb-3">
              Who I Am
            </h5>
            <h2 className="display-6 fw-bold mb-4">
              Proactive & Self-Taught Tech Professional
            </h2>
            
            {/* Professional Intro */}
            <p className="mb-4">
              I'm a proactive, self-taught tech professional who builds solutions and thrives on turning challenges into streamlined results.
            </p>

            {/* Personal/Hobbies */}
            <p className="mb-4">
              I stay active through basketball, swimming, and low-impact workouts, and unwind with Call of Duty or travel. My interests include history, vintage cars, and self-improvement.
            </p>

            {/* Fun Fact / Food */}
            <p className="mb-4">
              I'm fueled by ramen, steak, and lemon tea.
            </p>

            {/* Video Intro Button */}
            <a 
              href="https://www.loom.com/share/91df8c9b04f64aa1bad652e5d40e5b54" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-light mt-2 shadow-sm fw-bold"
            >
              <i className="bi bi-play-circle-fill me-2"></i> Watch Introduction
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
             {/* Ensure image is at public/imgs/about-me.jpg */}
            <img 
              src="/imgs/about-me.jpg" 
              alt="About Jason" 
              className="img-fluid about-img" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;