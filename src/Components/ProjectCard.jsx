import React from 'react';
// Project styles migrated to Tailwind; removed Project.css import

const ProjectCard = ({ project }) => {
  const technologies = project.technology.split(',').map((tech) => tech.trim());

  return (
    <div className="bg-slate-800 text-white rounded-lg shadow p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.duration}</p>
      </div>

      <p className="mt-3 text-sm text-gray-200">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        {project.demoLink && (
          <a
            className="text-sm text-cyan-400 hover:underline"
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
          >
            Demo Site
          </a>
        )}
        {project.codeLink && (
          <a
            className="text-sm text-cyan-400 hover:underline"
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
