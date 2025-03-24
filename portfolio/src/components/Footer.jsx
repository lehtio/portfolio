 import "../styles/Footer.css"; 
import linkedinIcon from "../images/linkedin.webp";
import githubIcon from "../images/github.png"; 

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Laura Lehtiö {new Date().getFullYear()}</p>
      
      <img src={githubIcon} alt="GitHub" className="icon" />

      <div className="social-media">
        <a href="https://www.linkedin.com/in/laura-lehtiö/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="https://github.com/lehtio" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
      </div>
      
    </footer>
  );
}
