import {useEffect} from 'react'
import Saran from '../assets/saran.jpg';
import './Home.css'
import Footer from './Footer';
import CV from '../assets/Resume.pdf'

const Home = () => {
    useEffect(() => {
        document.title = 'Sarankiruthik | Home';
    }, []);

    return (
        <>
            <div className="container-fluid bg-dark text-light py-5">
                {/* Header section */}
                <div className="row g-4 justify-content-center">
                    <div className="col-12 text-center">
                        <section className="mb-4">
                            <h1 className="display-5 fw-bold mb-0">SARANKIRUTHIK SANTHANAKRISHNAN</h1>
                            <p className="lead fs-5 text-muted">B.Tech | Artificial Intelligence And Data Science</p>
                        </section>
                    </div>

                    {/* Profile image and links */}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                        <img
                            src={Saran}
                            className="rounded-circle img-fluid shadow-lg mb-4 profile-img"
                            alt="my-photo"
                        />
                        <div className="d-flex justify-content-center ">
                            <a
                                className="btn btn-success fw-bold w-100"
                                href={CV}
                                download="SARAN KIRUTHik S S"
                            >
                                <i className="bi bi-download"></i>
                                &nbsp;<br />Download Resume
                            </a>
                        </div>
                    </div>

                    {/* About Me section */}
                    <div className="card bg-secondary text-light p-4 col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="card-body">
                            <h2 className="text-center fw-bolder fs-3 mb-4">
                                <i className="bi bi-file-person me-2"></i>About me
                            </h2>
                            <p className="text-justify fs-5">
                                I am a passionate and dedicated student, embarking on an academic journey fueled by
                                curiosity and a relentless pursuit of knowledge. Currently pursuing <b className="fw-bold text-info">B.TECH - Artificial
                                Intelligence and Data Science at Gnanamani College of Technology, Namakkal</b>, I thrive in the
                                dynamic intersection of theory and practical application. As an avid learner, I actively engage
                                in both coursework and extracurricular activities to broaden my perspectives and enhance my
                                skill set. With a keen interest in Full-stack Development, I am committed to leveraging my
                                academic prowess to contribute meaningfully to the field. My portfolio showcases not only my
                                academic achievements but also my projects, experiences, and the unique blend of skills that
                                define me. Beyond the classroom I am constantly seeking opportunities to collaborate and create
                                innovative solutions. Join me on this journey as I navigate the exciting challenges of
                                academia and beyond, driven by a genuine passion for continuous growth and success.
                            </p>
                            <section className="mt-4">
                                <div className="row fs-1 text-center">
                                    <div className="col">
                                        <a className="text-decoration-none text-info hover-scale" href="https://www.linkedin.com/in/sarankiruthiksanthanakrishnan/">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="text-decoration-none text-info hover-scale" href="https://github.com/SarankiruthikSanthanakrishnan">
                                            <i className="bi bi-github"></i>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="text-decoration-none text-info hover-scale" href="https://www.instagram.com/sarankiruthiksanthanakrishnan">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Education section */}
                    <div className="card bg-secondary text-light p-4 col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="card-body">
                            <h2 className="fw-bolder fs-3 text-center mb-4">
                                <i className="bi bi-backpack3-fill me-2"></i>Education
                            </h2>
                            {/* College */}
                            <div className="d-flex align-items-center mb-3">
                                <div className="me-auto">
                                    <h3 className="fs-4 fw-bold">Gnanamani College of Technology</h3>
                                    <p className="mb-0">B.Tech - Artificial Intelligence and Data Science</p>
                                    <p className="text-warning fw-bolder mb-0">Currently Pursuing</p>
                                    <small className="text-muted"><i className="bi bi-calendar3"></i> 2022-2026</small>
                                </div>
                                <div className="text-end fw-bolder fs-5 text-info">
                                    <div className="circle-progress">
                                        <div className="circle-inner">
                                            <span className="progress-text">CGPA 77.9%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3 text-info" />
                            {/* HSC */}
                            <div className="d-flex align-items-center mb-3">
                                <div className="me-auto">
                                    <h3 className="fs-4 fw-bold">S S V Higher Secondary School</h3>
                                    <p className="mb-0">HSC - Higher Secondary Certificate</p>
                                    <small className="text-muted"><i className="bi bi-calendar3"></i> 2020-2022</small>
                                </div>
                                <div className="text-end fw-bolder fs-5 text-info">
                                    <div className="circle-progress1">
                                        <div className="circle-inner">
                                            <span className="progress-text">84%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3 text-info" />
                            {/* SSLC */}
                            <div className="d-flex align-items-center">
                                <div className="me-auto">
                                    <h3 className="fs-4 fw-bold">S S V Higher Secondary School</h3>
                                    <p className="mb-0">SSLC - Secondary School Leaving Certificate</p>
                                    <small className="text-muted"><i className="bi bi-calendar3"></i> 2015-2020</small>
                                </div>
                                <div className="text-end fw-bolder fs-5 text-info">
                                    <div className="circle-progress2">
                                        <div className="circle-inner">
                                            <span className="progress-text">71.2%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills section */}
                    <div className="card bg-secondary text-light p-4 col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="card-body">
                            <h2 className="text-center fw-bolder fs-3 mb-4">
                                <i className="bi bi-bookmark-star-fill me-2"></i>Skills
                            </h2>
                            {/* Skills with colored progress bars */}
                            <h3 className="fs-5 fw-bold"><i className="bi bi-filetype-py"></i>&nbsp;Python Programming Language</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="Python skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '60%'}}>60%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-filetype-java"></i>&nbsp;Core Java Programming Language</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="Core Java skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '35%'}}>35%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-c-circle"></i> C Programming Language</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="C skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '80%'}}>80%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-file-earmark-spreadsheet-fill"></i>&nbsp;Excel</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="Excel skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '40%'}}>40%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-code-slash"></i>&nbsp;Web Development</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="Web Development skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '75%'}}>75%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-camera2"></i>&nbsp;Adobe Photoshop</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="Adobe Photoshop skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '30%'}}>30%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-filetype-sql"></i>&nbsp;Structure Query Language</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="SQL skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '50%'}}>50%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-filetype-php"></i>&nbsp;PHP</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="PHP skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '85%'}}>85%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-filetype-js"></i>&nbsp;JavaScript</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="JavaScript skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '85%'}}>85%</div>
                            </div>
                            <h3 className="fs-5 fw-bold"><i className="bi bi-filetype-jsx"></i>&nbsp;React js</h3>
                            <div className="progress mb-3" style={{height: '25px'}} role="progressbar" aria-label="JavaScript skill">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-purple" style={{width: '75%'}}>75%</div>
                            </div>
                        </div>
                    </div>

                    {/* Languages Known section */}
                    <div className="card bg-secondary text-light p-4 col-12">
                        <div className="card-body">
                            <h2 className="text-center fw-bolder fs-3 mb-4">
                                <i className="bi bi-translate me-2"></i>Languages Known
                            </h2>
                            <h3 className="fs-5 fw-bold">Tamil</h3>
                            <div className="progress mb-3" role="progressbar" style={{height: '25px'}}>
                                <div className="progress-bar bg-info" style={{width: '100%'}}>100%</div>
                            </div>
                            <h3 className="fs-5 fw-bold">English</h3>
                            <div className="progress mb-3" role="progressbar" style={{height: '25px'}}>
                                <div className="progress-bar bg-info" style={{width: '80%'}}>80%</div>
                            </div>
                            <h3 className="fs-5 fw-bold">Hindi</h3>
                            <div className="progress" role="progressbar" style={{height: '25px'}}>
                                <div className="progress-bar bg-info" style={{width: '20%'}}>20%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;