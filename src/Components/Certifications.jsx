// Certifications.jsx
import { useEffect } from 'react';
import CertificateCard from './CertificateCard';
import certificatesData from '../assets/Certificate.json';
// Certificate styles migrated to Tailwind; removed Certificate.css import

const Certifications = () => {
  useEffect(() => {
    document.title = 'Sarankiruthik | Certifications';
  }, []);

  return (
    <>
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Certifications
          </h2>

          <div className="grid gap-6 md:grid-cols-3 place-items-center">
            {certificatesData.map((certificate) => (
              <div key={certificate.id} className="mb-6 mt-6">
                <CertificateCard
                  certificateTitle={certificate.course}
                  certificateImg={certificate.imageSrc}
                  conductor={certificate.conductor}
                  dateofissue={certificate.DataofIssue}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
