// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  // Data Array based on your work-experience.txt
  const experiences = [
    {
      company: "MACROTEK DIGITAL SOLUTIONS",
      role: "Full Stack Developer",
      date: "June 2025 - Present",
      description: "I build and optimize websites with a strong focus on process automation, creating systems that streamline workflows, automate repetitive tasks, and improve business efficiency through smart web-based solutions."
    },
    {
      company: "SOLE PROPRIETORSHIP",
      role: "Business Owner",
      date: "Apr 2020 - Sept 2023",
      description: "Managed daily operations of a transportation business with a fleet of 8 vehicles. Handled client relations, scheduling, and contract negotiations with suppliers and customers. Oversaw financial planning, budgeting, and cost control to maintain profitability. Ensured compliance with local transportation regulations and safety standards."
    },
    {
      company: "PANDR, LEGAZPI CITY",
      role: "Virtual Assistant / Logistics",
      date: "Jun 2018 – Feb 2020",
      description: "Responsible for supporting small-scale technology certificate processing, remote coordinating supply chain logistics, planning material transportation, managing site logistics, and overseeing material distribution to ensure timely and efficient project execution for Aussolarco, a solar company in Australia."
    },
    {
      company: "NINJA EXPRESS PHILIPPINES",
      role: "Assistant Station Head",
      date: "May 2017 - Apr 2018",
      description: "Managed logistics operations, including remittance audits, EOD reconciliation, tracking, and reporting. Oversaw inventory management to ensure smooth operations."
    },
    {
      company: "SUTHERLAND GLOBAL SERVICES",
      role: "Customer Service Rep.",
      date: "Aug 2015 - Sep 2017",
      description: "Provided remote customer service for U.S.-based clients, handling inbound communications, upselling services, and meticulously documenting interactions. Ensured high customer satisfaction and strict adherence to company policies and service standards."
    },
    {
      company: "DEPT. OF AGRARIAN REFORM RO 5",
      role: "Operations Staff",
      date: "Aug 2014 - Jan 2015",
      description: "Contractual job order in document processing, file system software development, and computer maintenance."
    },
    {
      company: "DENR - ENVIRONMENTAL MGT. BUREAU RO 5",
      role: "M.I.S Staff",
      date: "Mar 2013 - July 2014",
      description: "Contractual job order in document processing and computer maintenance."
    }
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-uppercase text-secondary fw-bold">My Journey</h5>
          <h2 className="display-5 fw-bold text-dark">Professional Experience</h2>
          <div className="mx-auto mt-3" style={{width: '60px', height: '3px', backgroundColor: '#203a43'}}></div>
        </div>

        {/* Experience Cards */}
        <div className="row justify-content-center">
          <div className="col-lg-9">
            
            {experiences.map((exp, index) => (
              <div key={index} className="card card-experience shadow mb-4">
                <div className="card-header bg-gradient-exp p-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                      <h4 className="fw-bold mb-1">{exp.role}</h4>
                      <h6 className="fw-light mb-0 opacity-75">{exp.company}</h6>
                    </div>
                    <span className="badge bg-warning text-dark px-3 py-2 mt-2 mt-sm-0 rounded-pill">
                      {exp.date}
                    </span>
                  </div>
                </div>
                <div className="card-body p-4 bg-white">
                  <h6 className="fw-bold text-secondary mb-2">Key Responsibilities:</h6>
                  <p className="card-text text-muted" style={{ lineHeight: '1.7' }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;