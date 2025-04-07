import "../styles/HomePage.css";
import profiilikuva from "../images/profilepic.png";
import ProjectList from "../components/Projects.jsx";
import linkedinIcon from "../images/linkedin.webp";
import githubIcon from "../images/github.png";

export default function Home() {
  return (
    <div className="homepage">
      {/* Navigointi */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">Kuka?</a></li>
          <li><a href="#projects">Projektit</a></li>
          <li><a href="#contact">Ota yhteyttä</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="homepage-header">
        <h1 className="homepage-title">LAURA LEHTIÖ</h1>
        <p className="homepage-subtitle">PORTFOLIO & BLOG</p>
      </header>

      {/* About Section */}
      <section id="about" className="homepage-content">
        <div className="about-section">
          <h2 className="about-title">WHO AM I?</h2>
          <p className="about-text">
            Hi, I'm Laura, third year information and software engineering
            student. I'm currently doing my exchange semester in TU Graz
            studying industrial management. If you are interested to know more
            about my studies abroad, I highly recommend you to check my BLOG
            page.
          </p>
        </div>
        <div className="profile-section">
          <img src={profiilikuva} alt="Profile" className="profile-image" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="project-section">
        <h2>Projektit</h2>
        <p>Tässä on joitain projektejani:</p>
        <ProjectList />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-container">
        <h2>Ota yhteyttä</h2>
        <p>Tähän lisätään yhteystiedot ja yhteydenottolomake sähköpostitse :)</p>

        <div className="sosiaalinen-media">
          <a href="https://www.linkedin.com/in/laura-lehtiö/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/lehtio" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="icon" />
          </a>
        </div>
      </section>
    </div>
  );
}
