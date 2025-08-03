import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Resume from './Components/Resume'
import Project from './Components/Project'
import Certifications from './Components/Certifications'
import Internships from './Components/Internships'

function App() {
  return (
    <>
     <BrowserRouter>
      <Header/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Resume' element={<Resume/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/Certifications' element={<Certifications/>}/>
    <Route path='/Internships' element={<Internships/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
