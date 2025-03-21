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
    description: "Kandidaatintutkintoni pääaineena oli tieto- ja ohjelmistotekniikka ja sivuaineopintoina business administration ja cyber security. Kirjoitin kandidaatin tutkielman arvosanalla 5 aiheesta pääsyoikeuksien katselmointi osana pääsyoikeuksien hallinnan kehittämistä. Tutkintoni keskiarvoksi tuli 4,5.",
    studytime: "2022-2024"
  },
  {
    school: "TU Graz",
    degree: "Vaihto, maisterin tutkinnon sivuainekokonaisuus",
    description: "Tavoitteenani on suorittaa maisterin tutkintoni sivuainekokonaisuus TU Grazissa innovation and industrial management-ohjelmassa. Kursseista voit lukea tarkemmin vaihtosivultani joka löytyy osoitteesta",
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