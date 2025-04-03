/*import LoadingScreen from "../components/LoadingScreen";*/
import Projektit from "../components/Projects.jsx";
import React from "react";
import "../styles/Projects.css";


export default function Projects() {
    return (
      <div className="projekti-container">
        <h1>Projektit</h1>
        <p>Tähän lisätään projektit.Tavoitteena on aikanaan lisätä projekteihin niiden kategoriat ja käytetyt työkalut joiden perusteella sivustolle voidaan lisätä filtteröintimenetelmä.</p>
        
        <p>Kategorioita tulee olemaan web-, ui/ux, media ja sekalainen seurakunta</p>
        <p>Tarkoituksena on myös, että projektit esitellään kortteina, ja korttia painamalla avautuu lisäosa, jossa on tarkempi selitys projektista sekä siihen liittyvät linkit yms.</p>
        <Projektit />
      </div>
    );
  }
  