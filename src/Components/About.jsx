import {useEffect} from 'react'

const About = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | About';
  }, []);

  return (
    <div>About</div>
  )
}

export default About