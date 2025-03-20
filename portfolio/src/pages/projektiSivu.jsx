import LoadingScreen from "../components/LoadingScreen";
import Projektit from "../components/Projects.jsx";
import React from "react";
import "../styles/ProjektiSivu.css";


export default function Projects() {
    return (
      <div className="projekti-container">
        <h1>Omat prokkikset</h1>
        <p>Tähän lisätään projektit.</p>
        
        <Projektit />
      </div>
    );
  }
  