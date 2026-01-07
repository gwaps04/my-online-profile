// src/components/Education.jsx
import React from 'react';

const Education = () => {
  const educationData = [
    {
      school: "DIVINE WORD COLLEGE OF LEGAZPI",
      degree: "Bachelor of Sci. in Information Technology",
      year: "2009 - 2013",
      icon: "bi-mortarboard-fill", // Graduation Cap Icon
      color: "text-primary"
    },
    {
      school: "DIVINE WORD COLLEGE OF LEGAZPI",
      degree: "Secondary DWCL H.S DEPT.",
      year: "2005 - 2009",
      icon: "bi-backpack-fill", // Backpack/School Icon
      color: "text-success"
    }
  ];

  return (
    <section id="education" className="py-5">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-uppercase text-secondary fw-bold">Academic Background</h5>
          <h2 className="display-5 fw-bold text-dark">Education</h2>
          <div className="mx-auto mt-3" style={{width: '60px', height: '3px', backgroundColor: '#203a43'}}></div>
        </div>

        {/* Education Cards */}
        <div className="row justify-content-center g-4">
          {educationData.map((edu, index) => (
            <div key={index} className="col-md-6 col-lg-5">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="card-body p-4 text-center">
                  
                  {/* Icon Circle */}
                  <div className={`mb-3 d-inline-block p-3 rounded-circle bg-light`}>
                    <i className={`bi ${edu.icon} display-4 ${edu.color}`}></i>
                  </div>

                  {/* Content */}
                  <h4 className="card-title fw-bold text-dark mb-2">{edu.school}</h4>
                  <p className="card-text lead text-secondary mb-3">{edu.degree}</p>
                  
                  {/* Date Badge */}
                  <span className="badge bg-secondary rounded-pill px-3 py-2">
                    <i className="bi bi-calendar-event me-2"></i>
                    {edu.year}
                  </span>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;