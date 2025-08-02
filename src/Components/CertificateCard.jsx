// CertificateCard.jsx
import React from 'react';
import './Card.css'; // Assuming this is your CSS file

const CertificateCard = ({certificateTitle}) => {
  return (
    <>
    <div className="card">{certificateTitle}</div>
    </>
  );
};

export default CertificateCard;