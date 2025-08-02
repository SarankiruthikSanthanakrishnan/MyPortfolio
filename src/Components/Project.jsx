import { useEffect } from 'react';
import projectsData from '../assets/Product.json';
import ProjectCard from './ProjectCard';
import './Project.css'; // Make sure to create and link this CSS file

const Project = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Projects';
  }, []);

  return (
    <section className="projects-container py-5">
      <div className="container-fluid">
        {/* Main Heading for the Projects Section */}
        <h1 className="text-center display-4 fw-bold mb-5 text-white">
          <i className="bi bi-code-slash text-primary"></i> My Projects
        </h1>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-11 col-xs-12">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card-wrapper mb-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;