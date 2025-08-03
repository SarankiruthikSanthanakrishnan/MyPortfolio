// Certifications.jsx
import { useEffect } from "react";
import CertificateCard from "./CertificateCard";
import certificatesData from "../assets/Certificate.json";
import Footer from "./Footer";
import "./Card.css";

const Certifications = () => {
  useEffect(() => {
    document.title = "Sarankiruthik | Certifications";
  }, []);

  return (
    <>
      <div className="main">
        <div className=" certificate-container container ">
          <div className="row g-4">
            {certificatesData.map((certificate) => (
              <div
                className="col-12 col-md-6 col-lg-4  d-flex justify-content-center mb-4 "
                style={{ marginTop: "60px" }}
                key={certificate.id}
              >
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
      </div>

      <Footer />
    </>
  );
};

export default Certifications;
