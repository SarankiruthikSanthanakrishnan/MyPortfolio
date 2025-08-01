import { NavLink ,useLocation} from "react-router-dom"
import './Header.css'
import Load from '../assets/load2.gif'
const Header = () => {

    const location = useLocation();

    const pageTitles = {
        "/": "Home",
        "/Resume": "Resume",
        "/Project": "Projects",
        "/Certifications": "Certifications",
        "/Internships": "Internships",
    };

    const currentPageTitle = pageTitles[location.pathname] || "Portfolio";
  return (
    <>
    <div className="navbar bg-dark navbar-dark navbar-expand-sm ">
        <div className="container-fluid">
            <img src={Load} alt="Load" className="nav-brand" style={{width:"40px"}}/>
            <h4 className="navbar-brand fs-5 ">Sarankiruthik S S | {currentPageTitle}</h4>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="nav" className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="navbar-item"><NavLink className="nav-link" to={"/"}>Home</NavLink></li>
                    <li className="navbar-item"><NavLink className="nav-link" to={"/Resume"}>Resume</NavLink></li>
                    <li className="navbar-item"><NavLink className="nav-link" to={"/Project"}>Projects</NavLink></li>
                    <li className="navbar-item"><NavLink className="nav-link" to={"/Certifications"}>Certification</NavLink></li>
                    <li className="navbar-item"><NavLink className="nav-link" to={"/Internships"}>Internships</NavLink></li>
                    </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header