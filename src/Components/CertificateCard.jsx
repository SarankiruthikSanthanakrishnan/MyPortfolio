// Certificate styles migrated to Tailwind; removed Certificate.css import

const CertificateCard = ({
  certificateTitle,
  certificateImg,
  conductor,
  dateofissue,
}) => {
  function createGitHubImageUrl(fileName) {
    const baseUrl =
      'https://raw.githubusercontent.com/SarankiruthikSanthanakrishnan/FIles/main/';
    const encodedFileName = fileName.replace(/ /g, '%20');
    return `${baseUrl}${encodedFileName}`;
  }

  const imageUrl = createGitHubImageUrl(certificateImg);

  return (
    <div className="w-80 bg-slate-800 text-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt={certificateTitle}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h5 className="text-lg font-semibold text-cyan-300">
          {certificateTitle}
        </h5>
        <p className="text-sm text-gray-300">{conductor}</p>
        <p className="text-sm text-gray-400 mt-2">{dateofissue}</p>
      </div>
    </div>
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
