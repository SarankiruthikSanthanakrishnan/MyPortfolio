// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card-body1 my-4">
      <table className="table text-center table-borderless text-light">
        <tbody>
          <tr>
            <td colSpan="3" className="text-center">
              <h1 className="display-3">{project.title}</h1>
            </td>
          </tr>
          <tr>
            <td className="fs-5">Technology</td>
            <td className="fs-5">:</td>
            <td className="fs-5">{project.technology}</td>
          </tr>
          <tr>
            <td className="fs-5">Duration</td>
            <td className="fs-5">:</td>
            <td className="fs-5">{project.duration}</td>
          </tr>
          {project.organization && (
            <tr>
              <td className="fs-5">Organization</td>
              <td className="fs-5">:</td>
              <td className="fs-5">{project.organization}</td>
            </tr>
          )}
          <tr>
            <td colSpan="3" className="text-center">
              <a className="btn btn-primary" href={project.link}>
                <i className="bi bi-eye"></i> View Project
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectCard;