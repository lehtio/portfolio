import LoadingScreen from "../components/LoadingScreen.jsx";
import Opinnot from "../components/Opinnot.jsx";


 

export default function CV() {
    return (
      <div className="cv-container">
        <LoadingScreen />
        <h1>Oma CV</h1>
        <p>Tähän lisätään CV:n sisältöä, kuten koulutuksen, työkokemuksen ja taidot.</p>
        
        

        <h1>Koulutus</h1>
        <Opinnot />
        </div>
    );
  }
  