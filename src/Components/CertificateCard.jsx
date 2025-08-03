import './Certificate.css'

const CertificateCard = ({certificateTitle,certificateImg,conductor,dateofissue}) => {
     function createGitHubImageUrl(fileName) {
  const baseUrl = "https://raw.githubusercontent.com/SarankiruthikSanthanakrishnan/FIles/main/";
  const encodedFileName = fileName.replace(/ /g, '%20');
  return `${baseUrl}${encodedFileName}`;
}
const fileNameWithSpaces = certificateImg;
const imageUrl = createGitHubImageUrl(fileNameWithSpaces);
  return (
    <>
    <div className="card wrapper  h-100" style={{width: '22rem'}}>
    <img src={imageUrl} className="card-img-top img-thumbnail w-100 " style={{width:"200px",objectFit:'cover'}} alt="Image"/>
  <div className="card-body">
    <h5 className="card-title text-primary">{certificateTitle}</h5>
    <p className="card-text">{conductor}</p>
    <p className="card-text">{dateofissue}</p>
    
  </div>
</div>
    </>
  );
};

export default CertificateCard;

// College Events/Kongunadu College
// College Events/Muththaymmal Symposium
// College Events/Selvam ASTA 2K24
// College Events/Selvam ASTA 2K25
// College Events/VR Soft Tech


// Great Learning/C FOR BEGINNERS
// Great Learning/Front End Development
// Great Learning/HTML CERTIFICATE

// Hacker Rank/Java Certificate Hacker Rank
// Hacker Rank/javascript_basic certificate


// Internships/Arttifia Tech Certificate
// Internships/CodeAlpha Certificate
// Internships/Codsoft Certificate
// Internships/Cognifiyz Technologies Certificate
// Internships/SMEC internship
// Internships/TechNoHacks Certificate
// Internships/TechVedhu DS Internship

// Novi Tech R & D/NoviTech FSD Sertificate
// Novi Tech R & D/NoviTech Certificate
// Novi Tech R & D/React Js Bootcamp

// Simple Learn/SARANKIRUTHIK S S C program simplelearn

// Tech Mahindra/Tech Mahendra Cyber Security

// Tutor Joes/Tutor Joes

// Udemy/Microsoft Excel - Excel Course For Beginners
// Udemy/PHP with MySQL Bulid 5 PHP and MySQL Projects
// Udemy/Web Development Bootcamp Python Django Web Course

// Vaagai/Core Java Programming
// Vaagai/Emotional Intelligence
// Vaagai/Kaninitamil
// Vaagai/Python Programming
// Vaagai/Website 2.0
// Vaagai/enmin certificate

// TechVedhu DS Course 