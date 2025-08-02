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
        {certificatesData.map((certificate) => (
          <CertificateCard key={certificate.id}  certificateTitle={certificate.course}     />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Certifications;