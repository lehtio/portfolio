import React, { useState } from 'react';


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
    <div className="language-main-card">
      <span className="language-title">Skills</span>
      <div className="filter-dropdown">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="coding">Coding</option>
          <option value="methodologies">Methodologies</option>
          <option value="operating systems">Operating Systems</option>
          <option value="version control">Version Control</option>
          <option value="tools">Tools</option>
          <option value="soft skills">Soft Skills</option>
        </select>
      </div>
      <div className="language-cards">
        {filteredSkills.map((skill, index) => (
          <div className="language-card" key={index}>
            <span className="language-card-title">{skill.skill}</span>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${(skill.proficiency / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}