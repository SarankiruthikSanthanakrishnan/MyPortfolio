import { useEffect } from 'react';
import CV from '../assets/Resume.pdf';
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
        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <a
              className="btn btn-info text-dark fw-bold px-4 py-3"
              href={CV}
              download="SARAN KIRUTHIK S S"
            >
              <i className="bi bi-download me-2"></i>Download Resume
            </a>
          </div>
        </div>

        {/* Profile */}
        <div id="profile" className="card bg-secondary text-light fs-5 mt-4">
          <div className="card-body">
            <div className="row g-4 d-flex align-items-center">
              {/* Left Column for the Map */}
              <div className="col-12 col-lg-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    src="https://maps.google.com/maps?q=Solakkalipalayam,Chennasamudram&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="eager"
                    title="Google Map Location"
                  ></iframe>
                </div>
              </div>

              {/* Right Column for the Data Table */}
              <div className="col-12 col-lg-8 w-lg-100">
                <table className="table table-borderless text-light fs-5">
                  <tbody>
                    <tr>
                      <td className="fw-bold text-light w-25">Name</td>
                      <td>: SARAN KIRUTHIK S S</td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-light w-25">Address</td>
                      <td>
                        : 57/3,East Street, Government Hospital Road,
                        Solakkalipalayam,
                        <br />
                        Chennasamudram, Kodumudi,Tamilnadu
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-light w-25">Phone</td>
                      <td>: +91 8072682003</td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-light w-25">Email</td>
                      <td>
                        <a
                          className="w-75"
                          style={{ textDecoration: 'none', color: 'white' }}
                          href="mailto:skiruthik2510@gmail.com"
                        >
                          : skiruthik2510@gmail.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
        {/* Technical skills & Career Ideas */}
        <div className="row g-4 mt-4">
          {/* Technical Skills */}
          <div id="tk" className="col-lg-6 col-md-12">
            <div className="card bg-secondary text-light p-4">
              <h2 className="text-center text-info fw-bold mb-3">
                Technical Knowledge
              </h2>

              <ul className="list-unstyled row g-2 fs-5 text-start">
                {[
                  'Python',
                  'Java',
                  'C',
                  'HTML',
                  'CSS',
                  'Bootstrap 5',
                  'Powerpoint',
                  'SQL',
                  'Excel',
                  'JavaScript',
                  'Git & GitHub',
                ].map((skill, index) => (
                  <li key={index} className="col-12 d-flex align-items-center">
                    <i className="bi bi-check2-circle text-light me-2"></i>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Career Ideas */}
          <div className="col-lg-6 col-md-12">
            <div className="card bg-secondary text-light p-4">
              <h2 className="text-center text-info fw-bold mb-3">
                Career Ideas
              </h2>

              <ul className="list-unstyled row g-2 fs-5 text-start">
                {[
                  'Software Developing',
                  'Programmer',
                  'Web Designing',
                  'Full Stack Development',
                ].map((career, index) => (
                  <li key={index} className="col-12 d-flex align-items-center">
                    <i className="bi bi-check2-circle text-light me-2"></i>
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Accomplishment */}
        <div className="row mt-4 mx-auto">
          <div className="card bg-secondary text-light p-4 col-12" id="achieve">
            <div className="card-body">
              <h2 className="text-center text-info fw-bold mb-3">
                Accomplishments
              </h2>
              <div className="fs-5">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-award-fill text-warning me-2"></i>
                    Attended a Valuable workshop on{' '}
                    <strong>Mongo DB Atlas</strong> in{' '}
                    <strong> Rasipuram </strong>Which is conducted by
                    Muthayammal College of Engineering and Technology on
                    15-April-2023
                  </li>
                  <li>
                    <i className="bi bi-trophy-fill text-warning me-2"></i>
                    <strong>Won 1st prize </strong>for{' '}
                    <strong>Project Idea Presentation </strong>in National Level
                    Technical Symposium at{' '}
                    <strong>Selvam College of Technology</strong> on
                    05-April-2024
                  </li>
                  <li>
                    <i className="bi bi-award-fill text-warning me-2"></i>
                    Attended a Valuable workshop on{' '}
                    <strong>Web Development</strong> in <strong> Salem </strong>
                    Which is conducted by VR Soft Tech on 16-Feb-2025
                  </li>
                  <li>
                    <i className="bi bi-award-fill text-warning me-2"></i>
                    Attended a Valuable workshop on{' '}
                    <strong>
                      Python Programming (Basic to Advance)
                    </strong> in <strong> Salem </strong>Which is conducted by
                    Tutor Joes Computer Education on 06-July-2025
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
