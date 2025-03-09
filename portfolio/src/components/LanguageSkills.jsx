import "../styles/LanguageSkills.css";

const languages = [
  { name: "Suomi", flag: "🇫🇮", level: 5 },
  { name: "Englanti", flag: "🇬🇧", level: 4 },
  { name: "Ruotsi", flag: "🇸🇪", level: 2 },
  { name: "Saksa", flag: "🇩🇪", level: 1 },
];

export default function LanguageSkill() {
  return (
    <div className="main-card">
      <span className="title">Language Skills</span>
      <div className="cards">
        {languages.map((language, index) => (
          <div className="card" key={index}>
            <span className="card-title">{language.flag} {language.name}</span>
            <div className="card-body">
              <span className="stars">
                {"★".repeat(language.level)}
                {"☆".repeat(5 - language.level)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}