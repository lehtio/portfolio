import React from 'react';

const studies = [
  {
    school: "Munkkiniemen yhteiskoulu",
    degree: "Ylioppilas",
    description: "Opiskelin lukiossa erikoispitkää matematiikkaa ja yhteiskunta- ja talouslinjan",
    studytime: "2018-2021 (muistaakseni)"
  },
  {
    school: "Jyväskylän yliopisto",
    degree: "Kandidaatti",
    description: "Opiskelen Jyväskylän yliopistossa pääaineena tieto- ja ohjelmistotekniikkaa ja sivuaineena liiketaloutta ja kyberturvallisuutta",
    studytime: "2022-2024"
  },
  {
    school: "TU Graz",
    degree: "Maisteri",
    description: "Tavoitteenani on suorittaa maisterin tutkinto tieto- ja ohjelmistotekniikasta",
    studytime: "2024-2026"
  }
];

export default function Opinnot() {
  return (
    <div className="study-list">
      {studies.map((study, index) => (
        <div key={index} className="study-item">
          <div className="study-info">
            <h3>{study.school}</h3>
            <p>{study.degree}</p>
            <p>{study.description}</p>
            <p>{study.studytime}</p>
          </div>
        </div>
      ))}
    </div>
  );
}