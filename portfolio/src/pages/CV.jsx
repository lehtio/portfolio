import LoadingScreen from "../components/LoadingScreen.jsx";
import Opinnot from "../components/Opinnot.jsx";
import Harrastukset from "../components/Harrastukset.jsx";
import Tyokokemus from "../components/Tyokokemus.jsx";
import Taidot from "../components/Skills.jsx";
import "../styles/CvPage.css";

 

export default function CV() {
    return (
      <div className="cv-container">
        
        <h1>Oma CV</h1>
        <h1>Työkokemus</h1>
        <Tyokokemus />
        <h1>Koulutus</h1>
        
        <Opinnot />

        <h1>Vapaaehotistoiminta</h1>
        <Harrastukset />
        <h1>Taidot</h1>
        <Taidot />
        
        </div>
    );
  }
  