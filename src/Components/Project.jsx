// Project.jsx
import { useEffect } from 'react';
import projectsData from '../assets/Project.json';
import ProjectCard from './ProjectCard';
// Project styles migrated to Tailwind; removed Project.css import

const Project = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Projects';
  }, []);

  return (
    <>
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            My Projects
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <div key={index} className="w-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
