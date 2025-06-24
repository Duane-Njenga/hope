// src/pages/Projects.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Winter Clothing Drive 2024",
      description: "Collecting warm clothing, blankets, and essentials for refugee families and street people to help them endure the cold season.",
      image: "https://www.ig.ca/content/dam/investorsgroup/more/2023/12/family-with-gifts.jpg"
    },
    {
      title: "Community Kitchen Launch",
      description: "Opening a new community kitchen to provide hot, nutritious meals daily to children in local orphanages and the urban poor.",
      image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Educational Support Program",
      description: "A new initiative to provide school supplies, tutoring, and scholarships for children affected by conflict, giving them a path to a brighter future.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <AnimatedSection>
        <section className="page-section">
          <div className="container text-center">
            <h1 style={{ fontSize: '3.5rem' }}>Our Impact in Action</h1>
            <p className="text-center" style={{ fontSize: '1.25rem', maxWidth: '45rem', margin: '1rem auto 0', color: 'var(--color-text-light)' }}>
              See how your contributions are creating tangible change. Here are our current projects and upcoming events.
            </p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <img src={project.image} alt={project.title} className="project-card-image" />
                  <div className="project-card-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Link to="/donate" className="btn btn-gradient" style={{alignSelf: 'flex-start'}}>
                      Support This Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ProjectsPage;