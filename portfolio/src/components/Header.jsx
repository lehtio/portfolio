import "../styles/Header.css";
import profileAvatar from "../images/profile-avatar.webp"; // Tuo kuva

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>Projects</li>
          <li>CV</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <div className="header-content">
        <img src={profileAvatar} alt="Profile Avatar" className="profile-image" />
        <h1 className="otsikko">Portfolio - Larppa</h1>
       
      </div>
    </header>
  );
}
