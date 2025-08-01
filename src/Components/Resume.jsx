import { useEffect } from 'react';
import CV from '../assets/Resume.pdf'
import Footer from './Footer';

const Resume = () => {
    useEffect(() => {
        document.title = 'Sarankiruthik | Resume';
    }, []);

    return (
        <>
            <div className="container-fluid bg-dark text-light py-5">
                {/* Header */}
                <div className="row">
                    <div className="col-12 text-center d-block mx-auto">
                        <h1 className="display-5 fw-bolder">Resume</h1>
                    </div>
                </div>

                {/* Download Button */}
                <div className="row justify-content-end mt-4">
                    <div className="col-auto">
                        <a className="btn btn-info text-dark fw-bold px-4 py-3" href={CV}download="SARAN KIRUTHIK S S">
                            <i className="bi bi-download me-2"></i>Download Resume
                        </a>
                    </div>
                </div>

                {/* Profile */}
                <div id="profile" className="card bg-secondary text-light fs-5 mt-4">
                    <div className="card-body">
                        <p className="mb-2">
                            <strong style={{color:'white'}}>Name:</strong> SARAN KIRUTHIK S S <br />
                            <strong className="text-danger">Address:</strong> 57/3,East Street, Government Hospital Road, Solakkalipalayam,Chennasamudram, Kodumudi,Tamilnadu <br />
                            <br />
                            <strong className="text-danger"><i className="bi bi-telephone-fill"></i> Phone:</strong> +91 8072682003 <br />
                            <strong className="text-danger"><i className="bi bi-envelope"></i> E-mail:</strong>
                            <a style={{ textDecoration: 'none', color: 'white' }} href="mailto:skiruthik2510@gmail.com">
                                skiruthik2510@gmail.com
                            </a>
                        </p>
                        <div>
                            <div>
                                <a className="btn btn-primary btn-sm mt-2" href="https://maps.app.goo.gl/n7gbRg982WHDMFWN8">
                                    <i className="bi bi-geo"></i> Click me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div id="education" className="row mt-4">
                    <div className="col-12">
                        <h2 className="text-center text-info fw-bold mb-3">Education</h2>
                        <div className="table-responsive">
                            <table className="table table-bordered table-dark table-striped fs-5">
                                <thead>
                                    <tr className="table-primary text-dark">
                                        <th>S.no</th>
                                        <th>Degree/Course</th>
                                        <th>Institute/College</th>
                                        <th>University/Board</th>
                                        <th>Percentage/CGPA</th>
                                        <th>Year of Passing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>B.Tech Artificial Intelligence And Data Science</td>
                                        <td>GNANMANI COLLEGE OF TECHNOLOGY, A K SAMUDRAM,PACHAL</td>
                                        <td>Anna University</td>
                                        <td>7.79 CGPA (Upto to 5th sem)</td>
                                        <td>Pursuing</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>HIGHER SECONDARY COURSE</td>
                                        <td>SSV HIGHER SECONDARY SCHOOL,KODUMUDI</td>
                                        <td>Stateboard</td>
                                        <td>84%</td>
                                        <td>2022</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>SCHOOL SECONDARY LEAVING CERTIFICATE</td>
                                        <td>SSV HIGHER SECONDARY SCHOOL ,KODUMUDI</td>
                                        <td>Stateboard</td>
                                        <td>71.2%</td>
                                        <td>2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Technical skills & Career Ideas */}
                <div className="row g-4 mt-4">
                    <div id="tk" className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="card bg-secondary text-light p-4">
                            <h2 className="text-center text-info fw-bold mb-3">Technical Knowledge</h2>
                            <ul className="list-unstyled row row-cols-md-2 g-2 fs-5 text-start">
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>Python</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>Java</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>C</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>HTML</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>CSS</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>Bootstrap 5</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>Powerpoint</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>SQL</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>Excel</li>
                                <li className="col"><i className="bi bi-check2-circle text-light me-2"></i>JavaScript</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="card bg-secondary text-light p-4">
                            <h2 className="text-center text-info fw-bold mb-3">Career Ideas</h2>
                            <ul className="list-unstyled row row-cols-md-2 g-2 fs-5 text-start">
                                <li className="col-12"><i className="bi bi-check2-circle text-light me-2"></i>Software Developing</li>
                                <li className="col-12"><i className="bi bi-check2-circle text-light me-2"></i>Programmer</li>
                                <li className="col-12"><i className="bi bi-check2-circle text-light me-2"></i>Data Scientist</li>
                                <li className="col-12"><i className="bi bi-check2-circle text-light me-2"></i>Web Designing</li>
                                <li className="col-12"><i className="bi bi-check2-circle text-light me-2"></i>Full Stack Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Accomplishment */}
                <div className="row mt-4 mx-auto">
                    <div className="card bg-secondary text-light p-4 col-12" id="achieve">
                        <div className="card-body">
                            <h2 className="text-center text-info fw-bold mb-3">Accomplishments</h2>
                            <div className="fs-5">
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <i className="bi bi-award-fill text-warning me-2"></i>
                                        Attended a Valuable workshop on <strong>Mongo DB Atlas</strong> in <strong> Rasipuram </strong>Which is conducted by Muthayammal College of Engineering and Technology on 15-April-2023
                                    </li>
                                    <li >
                                        <i className="bi bi-trophy-fill text-warning me-2"></i>
                                        <strong>Won 1st prize </strong>for <strong>Project Idea Presentation </strong>in National Level
                                        Technical Symposium at <strong>Selvam College of Technology</strong> on 05-April-2024
                                    </li>
                                    <li>
                                        <i className="bi bi-award-fill text-warning me-2"></i>
                                        Attended a Valuable workshop on <strong>Web Development</strong> in <strong> Salem </strong>Which is conducted by VR Soft Tech on 16-Feb-2025
                                    </li>
                                     <li>
                                        <i className="bi bi-award-fill text-warning me-2"></i>
                                        Attended a Valuable workshop on <strong>Python Programming (Basic to Advance)</strong> in <strong> Salem </strong>Which is conducted by Tutor Joes Computer Education on 06-July-2025
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Resume;