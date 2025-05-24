import "../styles/HomePage.css";
import profiilikuva from "../images/profilepic.png";
import ProjectList from "../components/Projects.jsx";
import linkedinIcon from "../images/linkedin.webp";
import githubIcon from "../images/github.png";


export default function Home() {
  return (
    <div className="homepage">
      {/* Navigointi osien välillä */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">Kuka?</a></li>  
          <li><a href="#projects">Projektit</a></li>
          <li><a href="#contact">Ota yhteyttä</a></li>
        </ul>
      </nav>

      {/* Hienon kuvan osuus */}
      <header className="homepage-header">
        <h1 className="homepage-title">LAURA LEHTIÖ</h1>
        <p className="homepage-subtitle">PORTFOLIO & BLOG</p>
      </header>

      {/* Kuka oon Section */}
      <section id="about" className="homepage-content">
        <div className="about-section">
          <h2 className="about-title">WHO AM I?</h2>
          <p className="about-text">
            Moikka, mä olen Laura. Opiskelen Jyväskylän yliopistossa tieto- ja ohjelmistotekniikkaa ja tällä hetkellä TU Grazissa vaihto-opiskelijana 
            innovation and industrial managementtia. Opintojeni tarkoituksena on oivaltaa ja ymmärtää, miten teknologiaa ja tietotekniikkaa voidaan hyödyntää
            organisaatioiden ja yritysten kehittämisessä ja miten niitä voidaan käyttää tehokkaasti ja kestävästi.
          </p>
        </div>
        <div className="profile-section">
          <img src={profiilikuva} alt="Profile" className="profile-image" />
        </div>
      </section>

      {/* Prokkis Section */}
      <section id="projects" className="project-section">
      <h2 class="projects-title">Projektit</h2>
        <p>Niin mitäs mä sitten osaan...? No tässä on muutamia esimerkkejä projekteista joita oon tehny</p>
        <ProjectList />
      </section>

      {/* yhteydenotto Section */}
      <section id="contact" className="contact-container">
       <h2 class="contact-title">Ota yhteyttä</h2>
        <p>Tosta pääsee linkkariin ja gittiin kurkkimaan ja pistämään viestiä</p>

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
