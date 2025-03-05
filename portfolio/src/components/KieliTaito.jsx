import React from "react";

const languages = [
  { name: "Suomi", flag: "🇫🇮", level: 5 },
  { name: "Englanti", flag: "🇬🇧", level: 4 },
  { name: "Ruotsi", flag: "🇸🇪", level: 2 },
  { name: "Saksa", flag: "🇩🇪", level: 1 },
];

const LanguageSkill = ({ name, flag, level }) => {
  return (
    <div className="language">
      <span className="flag">{flag}</span> {name}
      <span className="stars">
        {"★".repeat(level)}
        {"☆".repeat(5 - level)}
      </span>
    </div>
  );
};

const KieliTaito = () => {
  return (
    <div className="language-container">
      <h2>Kielitaito</h2>
      {languages.map((lang, index) => (
        <LanguageSkill
          key={index}
          name={lang.name}
          flag={lang.flag}
          level={lang.level}
        />
      ))}
    </div>
  );
};

export default KieliTaito;
