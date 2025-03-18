import LoadingScreen from "../components/LoadingScreen";
import linkedinIcon from "../images/linkedin.webp";
import githubIcon from "../images/github.png"; 

export default function Contacts() {
    return (
      <div className="contact-container">
        <h1>Omat yhteystiedot</h1>
        <LoadingScreen />

        <p>Tähän lisätään yhteystiedot ja yhteydenottolomake sähköpostitse :).</p>

        <div className="sosiaalinen-media">
          <a href="https://www.linkedin.com/in/laura-lehtiö/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/lehtio" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="icon" />
          </a>
        </div>
        
      </div>
    );
  }
  





  
  