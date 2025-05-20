import React, { useState } from 'react';
/* import "../styles/LanguageSkills.css"; */

 

const Skills = [ 
  { skill: "JavaScript", proficiency: 3, class: "coding" },
  { skill: "React", proficiency: 3, class: "coding" },
  { skill: "Node.js", proficiency: 3, class: "coding" },
  { skill: "C#", proficiency: 3, class: "coding" },
  { skill: "Python", proficiency: 3, class: "coding" },
  { skill: "HTML", proficiency: 3, class: "coding" },

  { skill: "Agile & Scrum", proficiency: 3, class: "methodologies" },
  { skill: "MacOS", proficiency: 3, class: "operating systems" },
  { skill: "Windows", proficiency: 3, class: "operating systems" },
  { skill: "Linux", proficiency: 3, class: "operating systems" },
  { skill: "Github", proficiency: 3, class: "version control" },

  { skill: "Microsoft Office", proficiency: 3, class: "tools" },
  { skill: "BPML", proficiency: 3, class: "tools" },
  { skill: "Figma", proficiency: 3, class: "tools" },
  { skill: "Canva", proficiency: 3, class: "tools" },

  { skill: "Leadership", proficiency: 3, class: "soft skills" },

  { skill: "Problem Solving", proficiency: 3, class: "soft skills" },
  { skill: "Teamwork", proficiency: 3, class: "soft skills" },
  { skill: "Communication", proficiency: 3, class: "soft skills" },
  { skill: "Time Management", proficiency: 3, class: "soft skills" },
  { skill: "Creativity", proficiency: 3, class: "soft skills" },
  { skill: "Critical Thinking", proficiency: 3, class: "soft skills" },
];

export default function LanguageProficiency() {
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all' ? Skills : Skills.filter(skill => skill.class === filter);

  return (
    <div className="skill-main-card">
      <span className="language-title">Skills</span>
     


      <div className="filtering-skills">
        <label>
          <input type="radio" name="filter" value="all" checked={filter === 'all'} onChange={(e) => setFilter(e.target.value)} />
          All
        </label>
        <label>
          <input type="radio" name="filter" value="coding" checked={filter === 'coding'} onChange={(e) => setFilter(e.target.value)} />
          Coding
        </label>
        <label>
          <input type="radio" name="filter" value="methodologies" checked={filter === 'methodologies'} onChange={(e) => setFilter(e.target.value)} />
          Methodologies
        </label>
        <label>
          <input type="radio" name="filter" value="operating systems" checked={filter === 'operating systems'} onChange={(e) => setFilter(e.target.value)} />
          Operating Systems
        </label>
        <label>
          <input type="radio" name="filter" value="version control" checked={filter === 'version control'} onChange={(e) => setFilter(e.target.value)} />
          Version Control
        </label>  
        <label>
          <input type="radio" name="filter" value="tools" checked={filter === 'tools'} onChange={(e) => setFilter(e.target.value)} />
          Tools
        </label>
        <label>
          <input type="radio" name="filter" value="soft skills" checked={filter === 'soft skills'} onChange={(e) => setFilter(e.target.value)} />
          Soft Skills
        </label>
        
        
        </div>
        



      <div className="skill-cards">
        {filteredSkills.map((skill, index) => (
          <div className="language-card" key={index}>
            <span className="language-card-title">{skill.skill}</span>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${(skill.proficiency / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}