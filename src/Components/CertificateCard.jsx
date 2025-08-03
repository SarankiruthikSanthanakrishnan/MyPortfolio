import './Card.css'; 

const CertificateCard = ({certificateTitle,certificateImg,conductor}) => {
     function createGitHubImageUrl(fileName) {

  const baseUrl = "https://raw.githubusercontent.com/SarankiruthikSanthanakrishnan/FIles/main/";

  const encodedFileName = fileName.replace(/ /g, '%20');
  return `${baseUrl}${encodedFileName}.jpg`;
}
const fileNameWithSpaces = certificateImg;
const imageUrl = createGitHubImageUrl(fileNameWithSpaces);
console.table(imageUrl)
  return (
    <>
    <div class="card" style={{width: '18rem'}}>
    <img src={imageUrl} class="card-img-top" alt="Image"/>
  <div class="card-body">
    <h5 class="card-title">{certificateTitle}</h5>
    <p class="card-text">{conductor}</p>
    <a href={imageUrl} class="btn btn-primary">View Certificate</a>
  </div>
</div>
    </>
  );
};

export default CertificateCard;