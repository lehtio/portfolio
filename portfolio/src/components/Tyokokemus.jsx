import React from 'react';
import { Link } from "react-router-dom"; // React Router käyttöön

const tyokokemus = [
  {
    workplace: "Fortum Oyj",
    title: "Identity & access management, Cyber Security treinee",
    description: "kokemuksesta",
    workingtime: "01.05.2024-31.12.2024"
  },
  {
    workplace: "Kappeli, S-ryhmä",
    title: "Barista",
    description: "Kahvilahommaa ja asiakaspalvelua",
    workingtime: "1.5.2023-15.8.2023"
  },
  {
    workplace: "Espresso house",
    title: "Barista",
    description: "Kahvilahommaa ja asiakaspalvelua",
    workingtime: "1.9.2021-30.3.2022",
  },
  {
    workplace: "AG Oy",
    title: "Jäätelönmyyjä",
    description: "jätskiä, asiakaspalvelua, uusien kouluttamista",
    workingtime: "Kesät 2018-2021"
  }
];

export default function Opinnot() {
  return (
    <div className="tyo-list">
      {tyokokemus.map((tyo, index) => (
        <div key={index} className="tyo-item">
          <div className="tyo-info">
            <h3>{tyo.workplace}</h3>
            <p>{tyo.title}</p>
            <p>{tyo.description} </p>
            <p>{tyo.workingtime}</p>
          </div>
        </div>
      ))}
    </div>
  );
}