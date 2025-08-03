import { useEffect } from 'react';
import Data from '../assets/Internship.json';

const Internships = () => {

  useEffect(() => {
    document.title = 'Sarankiruthik | Internships';
  }, []);

  return (
    <>
    <div className="container-fluid bg-dark">
      <div className="container py-5">
      <h1 className="text-center mb-5">Professional Experience</h1>
      
      <div className="row g-0 justify-content-center position-relative">
        <div className="col-12 text-center position-absolute" style={{ height: '100%' }}>
          <div 
            className="bg-secondary" 
            style={{ width: '2px', height: '100%', margin: '0 auto' }}
          ></div>
        </div>

        {Data.map((item, index) => (
          <div
            key={item.id}
            className={`col-12 mb-5 d-flex shadow  ${index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'}`}
          >
            <div className={`col-md-5 card shadow-sm p-4 ${index % 2 === 0 ? 'me-auto' : 'ms-auto'}`}>
              <div className="d-flex align-items-center">
                <span 
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: '30px', height: '30px' }}
                >
                  {item.id}
                </span>
                <div>
                  <h3 className="h5">{item.course}</h3>
                  <p className="text-primary fw-bold mb-1">{item.conductor}</p>
                  <p className="text-muted mb-0">Issued: {item.DataofIssue}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
    
  );
};

export default Internships;