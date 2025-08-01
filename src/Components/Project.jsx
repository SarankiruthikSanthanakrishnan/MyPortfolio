import {useEffect} from 'react'



const Project = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Projects';
  }, []);

  return (
    <div>Project</div>
  )
}

export default Project