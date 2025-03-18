import React from 'react';
import { Link } from "react-router-dom"; // React Router käyttöön

const studies = [
  {
    school: "Munkkiniemen yhteiskoulu",
    degree: "Ylioppilas",
    description: "Opiskelin lukiossa erikoispitkää matematiikkaa ja yhteiskunta- ja talouslinjan",
    studytime: "2018-2021 (muistaakseni)"
  },
  {
    school: "Jyväskylän yliopisto",
    degree: "Tekniikan Kandidaatti",
    description: "Opiskelen Jyväskylän yliopistossa pääaineena tieto- ja ohjelmistotekniikkaa ja sivuaineena liiketaloutta ja kyberturvallisuutta",
    studytime: "2022-2024"
  },
  {
    school: "TU Graz",
    degree: "Vaihto, maisterin tutkinnon sivuainekokonaisuus",
    description: "Tavoitteenani on suorittaa maisterin tutkintoni sivuainekokonaisuus TU Grazissa innovation and industrial management-ohjelmassa.",
    studytime: "2024-2026",
    link: "/exchange"
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
            <p>{study.description} {study.link && <Link to={study.link}>Exchange</Link>}</p>
            <p>{study.studytime}</p>
          </div>
        </div>
      ))}
    </div>
  );
}