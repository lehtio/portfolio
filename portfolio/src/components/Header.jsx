import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // React Router käyttöön
 import "../styles/NewHeader.css"; 
import profileAvatar from "../images/profile-avatar.webp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkHeaderSize = () => {
      const header = document.querySelector(".header");
      if (header) {
        const headerHeight = header.getBoundingClientRect().height;
        const screenHeight = window.innerHeight;

        if (headerHeight > screenHeight * 0.30 || window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", checkHeaderSize);
    window.addEventListener("resize", checkHeaderSize);
    window.addEventListener("load", checkHeaderSize);

    checkHeaderSize();

    return () => {
      
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-bar">
        <h1 className="site-title">Portfolio</h1>
      
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          
          <li><Link to="/exchange">Exchange</Link></li>
        </ul>
      </nav>
    </header>
  );
}
