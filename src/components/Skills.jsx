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
          
          {/* Technical Skills Overview Integration */}
          <div className="mt-4 mx-auto" style={{maxWidth: '850px'}}>
            <p className="lead text-muted">
              Knowledgeable and experienced in building and troubleshooting roadblocks, 
              particularly in <strong>Workflow and AI Automations</strong>.
            </p>
          </div>
        </div>

        {/* 1. TECHNICAL SKILLS GRID */}
        <div className="row g-4 mb-5">
          
          {/* Development */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 hover-card">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 text-center">
                 <i className="bi bi-code-slash fs-1 text-primary"></i>
                 <h5 className="card-title fw-bold mt-2">Development</h5>
              </div>
              <div className="card-body text-center">
                <div className="row row-cols-3 g-3">
                  <div className="col"><i className="devicon-react-original colored fs-2"></i><p className="small mt-1">React</p></div>
                  <div className="col"><i className="devicon-javascript-plain colored fs-2"></i><p className="small mt-1">JS</p></div>
                  <div className="col"><i className="devicon-nodejs-plain colored fs-2"></i><p className="small mt-1">Node</p></div>
                  <div className="col"><i className="devicon-php-plain colored fs-2"></i><p className="small mt-1">PHP</p></div>
                  <div className="col"><i className="devicon-python-plain colored fs-2"></i><p className="small mt-1">Python</p></div>
                  <div className="col"><i className="devicon-tailwindcss-original colored fs-2"></i><p className="small mt-1">Tailwind</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend & Cloud */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 hover-card">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 text-center">
                 <i className="bi bi-cloud-arrow-up fs-1 text-secondary"></i>
                 <h5 className="card-title fw-bold mt-2">Backend & Cloud</h5>
              </div>
              <div className="card-body text-center">
                <div className="row row-cols-3 g-3">
                  <div className="col"><i className="devicon-postgresql-plain colored fs-2"></i><p className="small mt-1">Postgres</p></div>
                  <div className="col"><i className="devicon-mongodb-plain colored fs-2"></i><p className="small mt-1">MongoDB</p></div>
                  <div className="col"><i className="devicon-supabase-plain colored fs-2"></i><p className="small mt-1">Supabase</p></div>
                  <div className="col"><i className="devicon-googlecloud-plain colored fs-2"></i><p className="small mt-1">G-Cloud</p></div>
                  <div className="col"><i className="devicon-vercel-original fs-2"></i><p className="small mt-1">Vercel</p></div>
                  <div className="col"><i className="devicon-mysql-original colored fs-2"></i><p className="small mt-1">SQL</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS & CRM */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 hover-card">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 text-center">
                 <i className="bi bi-briefcase fs-1 text-success"></i>
                 <h5 className="card-title fw-bold mt-2">SaaS & CRM</h5>
              </div>
              <div className="card-body text-center">
                <div className="row row-cols-3 g-2">
                  <div className="col"><i className="devicon-salesforce-plain colored fs-2"></i><p className="small mt-1">SFDC</p></div>
                  <div className="col"><i className="devicon-slack-plain colored fs-2"></i><p className="small mt-1">Slack</p></div>
                  <div className="col"><span className="badge bg-info text-dark p-2 w-100">HubSpot</span></div>
                  <div className="col"><span className="badge bg-primary p-2 w-100">Monday</span></div>
                  <div className="col"><span className="badge bg-warning text-dark p-2 w-100">Zoho</span></div>
                  <div className="col"><span className="badge bg-success p-2 w-100">GHL</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* NEW: Automation & AI Expertise */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 hover-card" style={{borderTop: '4px solid #ffc107 !important'}}>
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 text-center">
                 <i className="bi bi-robot fs-1 text-warning"></i>
                 <h5 className="card-title fw-bold mt-2">Automation & AI</h5>
              </div>
              <div className="card-body">
                <div className="text-center mb-3">
                    <span className="badge rounded-pill bg-dark me-1 mb-1">n8n (Spc.)</span>
                    <span className="badge rounded-pill bg-dark me-1 mb-1">ManyChat</span>
                    <span className="badge rounded-pill bg-dark me-1 mb-1">Dialogflow</span>
                </div>
                <ul className="list-unstyled small text-muted ps-2">
                    <li><i className="bi bi-check2-circle text-primary me-2"></i>n8n VPS & Hosting</li>
                    <li><i className="bi bi-check2-circle text-primary me-2"></i>Webhook & Auth</li>
                    <li><i className="bi bi-check2-circle text-primary me-2"></i>Gemini AI Agents</li>
                    <li><i className="bi bi-check2-circle text-primary me-2"></i>WhatsApp/Twilio API</li>
                    <li><i className="bi bi-check2-circle text-primary me-2"></i>Retrieval-Augmented Generation</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2. GROWTH & UPCOMING INTERESTS */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="row g-0">
                
                {/* Header Side */}
                <div className="col-md-4 bg-secondary text-white d-flex align-items-center justify-content-center p-4">
                  <div className="text-center">
                    <i className="bi bi-rocket-takeoff display-4 mb-3"></i>
                    <h4 className="fw-bold">Evolution</h4>
                    <p className="small opacity-75">Scaling my technical stack.</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="col-md-8">
                  <div className="card-body p-4 p-lg-5">
                    
                    <div className="row">
                        {/* Improvements */}
                        <div className="col-md-6 border-end">
                            <h5 className="fw-bold text-dark border-bottom pb-2 mb-3">
                                <i className="bi bi-tools text-warning me-2"></i>
                                Core Focus
                            </h5>
                            <ul className="list-unstyled small text-muted">
                                <li className="mb-2"><strong>VPS Troubleshooting:</strong> Managing n8n self-hosted environments.</li>
                                <li className="mb-2"><strong>AI Chatbots:</strong> Specialized in Gemini-powered development.</li>
                                <li className="mb-2"><strong>Meta Integration:</strong> FB/Instagram automation workflows.</li>
                            </ul>
                        </div>

                        {/* Upcoming Interests */}
                        <div className="col-md-6 ps-md-4">
                            <h5 className="fw-bold text-dark border-bottom pb-2 mb-3">
                                <i className="bi bi-stars text-primary me-2"></i>
                                Upcoming Interests
                            </h5>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-light text-dark border">Zapier</span>
                                <span className="badge bg-light text-dark border">Make.com</span>
                                <span className="badge bg-light text-dark border">Relevance AI</span>
                                <span className="badge bg-light text-dark border">Ollama</span>
                                <span className="badge bg-light text-dark border">ClickUp</span>
                                {/* Added Hugging Face here */}
                                <span className="badge bg-light text-dark border">Hugging Face</span>
                                <span className="badge bg-light text-dark border">Fine Tuning</span>
                            </div>
                            <p className="text-muted small mt-3 italic">
                                Exploring local LLMs and advanced low-code orchestration.
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
    </section>
  );
};

export default Skills;