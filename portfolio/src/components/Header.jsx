import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // React Router käyttöön
 import "../styles/Header.css"; 


export default function Header() {
 
  return (
    <header className="header">
      <nav className="nav-bar">
        
      
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/cv">RESUME</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          
          <li><Link to="/exchange">BLOG</Link></li>
        </ul>
      </nav>
    </header>
  );
}
