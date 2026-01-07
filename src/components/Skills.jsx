// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-uppercase text-secondary fw-bold">My Expertise</h5>
          <h2 className="display-5 fw-bold text-dark">Technical & Professional Skills</h2>
          <div className="mx-auto mt-3" style={{width: '60px', height: '3px', backgroundColor: '#203a43'}}></div>
        </div>

        {/* 1. TECHNICAL SKILLS GRID (Icons) */}
        <div className="row g-4 mb-5">
          
          {/* Development */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 text-center">
                 <i className="bi bi-code-slash fs-1 text-primary"></i>
                 <h4 className="card-title fw-bold mt-2">Development</h4>
              </div>
              <div className="card-body text-center">
                <div className="row row-cols-3 g-3">
                  <div className="col"><i className="devicon-react-original colored fs-1"></i><p className="small mt-1">React</p></div>
                  <div className="col"><i className="devicon-javascript-plain colored fs-1"></i><p className="small mt-1">JavaScript</p></div>
                  <div className="col"><i className="devicon-nodejs-plain-wordmark colored fs-1"></i><p className="small mt-1">Node.js</p></div>
                  <div className="col"><i className="devicon-php-plain colored fs-1"></i><p className="small mt-1">PHP</p></div>
                  <div className="col"><i className="devicon-python-plain colored fs-1"></i><p className="small mt-1">Python</p></div>
                  <div className="col"><i className="devicon-tailwindcss-original colored fs-1"></i><p className="small mt-1">Tailwind</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend & Cloud */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 text-center">
                 <i className="bi bi-cloud-arrow-up fs-1 text-secondary"></i>
                 <h4 className="card-title fw-bold mt-2">Backend & Cloud</h4>
              </div>
              <div className="card-body text-center">
                <div className="row row-cols-3 g-3">
                  <div className="col"><i className="devicon-postgresql-plain colored fs-1"></i><p className="small mt-1">PostgreSQL</p></div>
                  <div className="col"><i className="devicon-mongodb-plain colored fs-1"></i><p className="small mt-1">MongoDB</p></div>
                  <div className="col"><i className="devicon-googlecloud-plain colored fs-1"></i><p className="small mt-1">G-Cloud</p></div>
                  <div className="col"><i className="devicon-vercel-original fs-1"></i><p className="small mt-1">Vercel</p></div>
                  <div className="col"><i className="devicon-mysql-original colored fs-1"></i><p className="small mt-1">SQL</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS & Tools */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 text-center">
                 <i className="bi bi-briefcase fs-1 text-success"></i>
                 <h4 className="card-title fw-bold mt-2">SaaS & CRM</h4>
              </div>
              <div className="card-body text-center">
                <div className="row row-cols-3 g-3">
                  <div className="col"><i className="devicon-salesforce-plain colored fs-1"></i><p className="small mt-1">Salesforce</p></div>
                  <div className="col"><i className="devicon-slack-plain colored fs-1"></i><p className="small mt-1">Slack</p></div>
                  <div className="col"><i className="devicon-figma-plain colored fs-1"></i><p className="small mt-1">Figma</p></div>
                  <div className="col"><span className="badge bg-warning text-dark p-2 mt-1">Zoho</span></div>
                  <div className="col"><span className="badge bg-success p-2 mt-1">GHL</span></div>
                  <div className="col"><span className="badge bg-primary p-2 mt-1">ClickUp</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. GROWTH & IMPROVEMENT CARD (New Section) */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="row g-0">
                
                {/* Header Side (Decorative) */}
                <div className="col-md-4 bg-secondary text-white d-flex align-items-center justify-content-center p-4">
                  <div className="text-center">
                    <i className="bi bi-graph-up-arrow display-4 mb-3"></i>
                    <h4 className="fw-bold">Growth & Development</h4>
                    <p className="small opacity-75">My commitment to continuous learning.</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="col-md-8">
                  <div className="card-body p-4 p-lg-5">
                    
                    {/* Weaknesses Section */}
                    <div className="mb-4">
                      <h5 className="fw-bold text-dark border-bottom pb-2 mb-3">
                        <i className="bi bi-exclamation-circle text-warning me-2"></i>
                        Areas for Improvement
                      </h5>
                      <ul className="list-unstyled">
                        <li className="mb-3 d-flex align-items-start">
                          <i className="bi bi-dot text-secondary fs-3 me-1" style={{marginTop: '-10px'}}></i>
                          <div>
                            <strong>Artistic Graphic Design:</strong>
                            <p className="text-muted small mb-0">Identifying the need to improve creative design aesthetics.</p>
                          </div>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-dot text-secondary fs-3 me-1" style={{marginTop: '-10px'}}></i>
                          <div>
                            <strong>English Language Proficiency:</strong>
                            <p className="text-muted small mb-0">
                              Currently Intermediate Level B1 Certified. I can confidently speak, understand, and write, but I aim for higher fluency.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Action Plan Section */}
                    <div>
                      <h5 className="fw-bold text-dark border-bottom pb-2 mb-3">
                        <i className="bi bi-lightning-charge text-warning me-2"></i>
                        Action Plan
                      </h5>
                      <div className="d-flex align-items-start">
                         <i className="bi bi-check-circle-fill text-success mt-1 me-3"></i>
                         <div>
                           <h6 className="fw-bold mb-1">Practice & Exposure</h6>
                           <p className="text-muted small mb-0">
                             Consistently engaging in more projects and conversations to refine both design and language skills.
                           </p>
                         </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;