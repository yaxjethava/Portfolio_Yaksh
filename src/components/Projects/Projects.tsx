import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaRocket } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'A2AI Technologies Website',
      description: 'A fully frontend React.js project showcasing the portfolio of A2AI Technologies(IT Agency). Highlights company services, projects, and branding with a responsive and modern UI.',
      image: '/assets/projects/a2ai portfolio.png',
      category: 'Frontend',
      technologies: ['React', 'JavaScript', 'Bootstrap', 'CSS'],
      github: 'https://github.com/yaxjethava/A2AI-technologies',
      live: 'https://a2ai-technologies.vercel.app/'
    },
    {
      id: 2,
      title: 'A2AI Creations',
      description: 'A static e-commerce style website built with HTML, CSS, and JavaScript for selling Maa Saraswati statues. Includes product showcase and a "Buy Now" feature that redirects customers to WhatsApp for direct orders.',
      image: '/assets/projects/a2ai creation thumbnail.png',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/yaxjethava/A2AI-Creations',
      live: 'https://a2ai-creations.vercel.app/index.html'
    },
    {
      id: 3,
      title: 'Certificate Distribution Website',
      description: 'A frontend website built with HTML, CSS, and JavaScript for distributing school certificates to national-level candidates. Certificates are stored in Google Drive, and users can search with their phone number to find and download their certificate.',
      image: '/assets/projects/certificate distibution.png',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google Drive API'],
      github: 'https://github.com/yaxjethava/Certificate-distribution-website---Deepak',
      live: 'https://deepak-high.vercel.app/'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A real-time weather forecasting website built with HTML, CSS, and JavaScript. Utilizes the OpenWeatherMap API to fetch and display weather data for any city worldwide.',
      image: '/assets/projects/weather app.png',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/yaxjethava/weather-App',
      live: 'https://weather-app-yax.vercel.app/'
    },
    {
      id: 5,
      title: 'Food Address',
      description: 'A responsive food website built with HTML, CSS, and Bootstrap. Showcases menus, featured dishes, about section, and contact details with clean UI and mobile-friendly layout.',
      image: '/assets/projects/food address.png',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/yaxjethava/Food-Address',
      live: 'https://food-address-x.vercel.app/'
    },
    {
      id: 6,
      title: 'Watches E-Commerce',
      description: 'Frontend e-commerce project for watches. Includes a home page with product listings, add-to-cart functionality using JavaScript localStorage, and a simple shopping experience.',
      image: '/assets/projects/create your time.png',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/yaxjethava/watches-E-commerce',
      live: 'https://create-time-x.vercel.app/'
    },
    {
      id: 7,
      title: 'Calculator',
      description: 'A simple and responsive calculator built with HTML, CSS, and JavaScript. Provides basic arithmetic operations with a clean UI.',
      image: '/assets/projects/calculator Java script.png',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/yaxjethava/calculator',
      live: 'https://calculator-x-eight.vercel.app/'
    },
    {
      id: 8,
      title: 'Stop Watch',
      description: 'A simple stopwatch web app built with HTML, CSS and JavaScript. Users can start, stop, reset the timer with a clean UI and responsive design.',
      image: '/assets/projects/stop watch.png',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/yaxjethava/stop-watch',
      live: 'https://stop-watch-seven-amber.vercel.app/'
    }
  ];

  const categories = ['All', 'MERN Stack', 'Full Stack', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <div className="projects-header">
              <h2 className="section-title" data-aos="fade-up">
                My Projects
              </h2>
              {/* <div className="title-underline" data-aos="fade-up" data-aos-delay="100"></div> */}
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
                A showcase of my work and personal projects
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <div className="filter-buttons" data-aos="fade-up" data-aos-delay="400">
              <FaFilter className="filter-icon me-2" />
              {categories.map(category => (
                <Button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {filteredProjects.length === 0 ? (
          <Row>
            <Col lg={12}>
              <div className="coming-soon-container" data-aos="zoom-in">
                <div className="coming-soon-content">
                  <FaRocket className="rocket-icon" />
                  <h3 className="coming-soon-title">Exciting Projects Coming Soon!</h3>
                  <p className="coming-soon-text">
                    I'm currently working on amazing <strong>{activeFilter}</strong> projects.
                    Stay tuned for updates!
                  </p>
                  <div className="coming-soon-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            {filteredProjects.map((project, index) => (
              <Col lg={4} md={6} className="mb-4" key={project.id}>
                <div
                  className="project-card clean-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} className="img-fluid" />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" title="View Code">
                          <FaGithub />
                        </a>
                        <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer" title="Live Preview">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                    {/* <div className="project-number">#{index + 1}</div> */}
                  </div>
                  <div className="project-content p-4">
                    <div className="project-header mb-3">
                      <Badge className="category-badge">{project.category}</Badge>
                    </div>
                    <h5 className="project-title mb-3">{project.title}</h5>
                    <p className="project-description mb-3">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions mt-3">
                      <a href={project.github} className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </a>
                      <a href={project.live} className="action-btn live-btn" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="projects-footer" data-aos="fade-up">
              <p className="footer-text">
                Want to see more? Check out my <a href="https://github.com/yaxjethava" target="_blank" rel="noopener noreferrer" className="github-link">GitHub profile</a> for additional projects!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;