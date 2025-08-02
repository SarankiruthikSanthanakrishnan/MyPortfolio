
import React from 'react';
import './Project.css';

const ProjectCard = ({ project }) => {
  const technologies = project.technology.split(',').map(tech => tech.trim());

  return (
    <div className="project-card">
      <div className="card-header">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-duration">{project.duration}</p>
      </div>
      
      <div className="card-body">
        <div className="technologies-container">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-tag">{tech}</span>
          ))}
        </div>
        
        {project.organization && (
          <p className="project-organization">
            <span className="fw-bold">Organization:</span> {project.organization}
          </p>
        )}
      </div>

      <div className="card-footer d-flex justify-content-between gap-3">
        {project.demoLink && (
          <a
            className="shaded-link"
            href={project.demoLink}
            target="_blank"
          >
            <i className="bi bi-box-arrow-up-right me-2"></i> Demo Site
          </a>
        )}
        {project.codeLink && (
          <a
            className="shaded-link"
            href={project.codeLink}
            target="_blank"
          >
            <i className="bi bi-code-slash me-2"></i> View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;