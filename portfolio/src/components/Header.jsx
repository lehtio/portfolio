import "../styles/Header.css";

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
        <h1 className="otsikko">Portfolio</h1>
        <p className="header-text">Tähän osioon tulee vielä aikanaan kuva ja jokin järkevä otsikko</p>
      </div>
    </header>
  );
}
