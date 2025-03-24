 import "../styles/LanguageSkills.css"; 

const languageSkills = [ /* 5= äidinkieli, 4=jebajeba, ...,  1= alkeet */
  { language: "Finnish", proficiency: 5 },
  { language: "English", proficiency: 4 },
  { language: "Swedish", proficiency: 2 },
  { language: "German", proficiency: 1 },
];

export default function LanguageProficiency() {
  return (
    <div className="language-main-card">
      <span className="language-title">Language skills</span>
      <div className="language-cards">

        {languageSkills.map((skill, index) => (
          <div className="language-card" key={index}>
            <span className="language-card-title">{skill.language}</span>
              <div className="language-stars">
                {"★".repeat(skill.proficiency)}
                {"☆".repeat(5 - skill.proficiency)}
              </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}