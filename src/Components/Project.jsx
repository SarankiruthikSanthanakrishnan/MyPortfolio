import {useEffect} from 'react'
import projectsData from '../assets/Product.json'
import ProjectCard from './ProjectCard';



const Project = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Projects';
  }, []);

  return (
    <>
    <div className="card">
      <div className="card-body">
        <div className="row d-flex mx-auto my-auto justify-content-center align-items-center">
          <div className="col col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-11 col-xs-12">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Project