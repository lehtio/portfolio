import "../styles/HomePage.css";
import profiilikuva from "../images/profilepic.png";

export default function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="homepage-header">
        <h1 className="homepage-title">LAURA LEHTIÖ</h1>
        <p className="homepage-subtitle">PORTFOLIO & BLOG</p>
      </header>

      {/* About Section */}
      <section className="homepage-content">
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
          <img
            src={profiilikuva}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </section>
    </div>
  );
}
