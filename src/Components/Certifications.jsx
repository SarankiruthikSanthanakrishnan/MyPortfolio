// Certifications.jsx
import { useEffect } from 'react';
import CertificateCard from './CertificateCard';
import certificatesData from '../assets/Certificate.json'
import Footer from './Footer';
import './Card.css';

const Certifications = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Certifications';
  }, []);

  return (
    <>
      <div className="certificate-container container mx-auto">
        <div className="row g-4"> 
          {certificatesData.map((certificate) => (
            <div className="col-12 col-md-6 col-lg-4" style={{marginTop:'60px'}}  key={certificate.id}>
              <CertificateCard
                certificateTitle={certificate.course}
                certificateImg={certificate.imageSrc}
                conductor={certificate.conductor}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certifications;