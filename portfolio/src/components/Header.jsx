import { useState, useEffect } from "react";
import "../styles/Header.css";
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
    window.addEventListener("load", checkHeaderSize); // Tarkistaa heti kun sivu latautuu

    checkHeaderSize(); // Tarkistaa heti sivun latauduttua

    return () => {
      window.removeEventListener("scroll", checkHeaderSize);
      window.removeEventListener("resize", checkHeaderSize);
      window.removeEventListener("load", checkHeaderSize);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-bar">
        <h1 className="site-title">Portfolio</h1>
        <ul className="nav-links">
          <li>Projects</li>
          <li>CV</li>
          <li>Contacts</li>
          <li>About</li>
        </ul>
      </nav>
      {!isScrolled && <img src={profileAvatar} alt="Profile Avatar" className="profile-image" />}
    </header>
  );
}
