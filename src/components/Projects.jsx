// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Macrotek Digital Solutions",
      url: "https://www.macrotekdigitalsolutions.com",
      role: "Founder & Lead Developer",
      desc: "A digital solutions platform helping small businesses with affordable storefront websites and enterprise systems. Features sales funnels and automated workflows.",
      icon: "bi-globe"
    },
    {
      title: "Macrotek Sales Funnel",
      url: "https://sales-marcrotek.vercel.app/",
      role: "Frontend Developer",
      desc: "A specialized sales landing page designed for high conversion. demonstratng modern UI/UX principles, copywriting integration, and responsive design.",
      icon: "bi-graph-up-arrow"
    },
    {
      title: "Go Green Solar PH",
      url: "https://www.gogreensolarph.com",
      role: "Web Specialist",
      desc: "A corporate website for renewable energy solutions. Focuses on clear information architecture, lead generation forms, and brand credibility.",
      icon: "bi-sun-fill"
    },
    {
      title: "Accelerated RC",
      url: "https://acceleratedrc.com",
      role: "Web Developer",
      desc: "A niche business website optimized for performance and user engagement. Showcases product/service listings with a streamlined navigation structure.",
      icon: "bi-speedometer2"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-uppercase text-secondary fw-bold">My Portfolio</h5>
          <h2 className="display-5 fw-bold text-dark">Sample Projects</h2>
          <div className="mx-auto mt-3" style={{width: '60px', height: '3px', backgroundColor: '#203a43'}}></div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 shadow-sm border-0 project-card">
                <div className="row g-0 h-100">
                  
                  {/* Icon/Visual Side */}
                  <div className="col-sm-4 bg-dark text-white d-flex align-items-center justify-content-center p-4">
                    <div className="text-center">
                      <i className={`bi ${project.icon} display-3 mb-2 text-warning`}></i>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="col-sm-8">
                    <div className="card-body h-100 d-flex flex-column">
                      <h5 className="card-title fw-bold text-dark">{project.title}</h5>
                      <span className="badge bg-light text-secondary border mb-3 align-self-start">
                        {project.role}
                      </span>
                      <p className="card-text text-muted small mb-4 flex-grow-1">
                        {project.desc}
                      </p>
                      
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-outline-dark btn-sm fw-bold align-self-start"
                      >
                        Visit Website <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;