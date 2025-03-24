import InfoBox from "../components/InfoBox.jsx";
import Projektit from "../components/Projects.jsx";
import KieliTaito from "../components/LanguageSkill.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";
import Skills from "../components/Skills.jsx";
import "../styles/HomePage.css";

export default function Home() {
  return (
    <div className="main-content">
      <InfoBox />
      <Projektit />
      <KieliTaito />
      <Skills />

      <LoadingScreen />
    </div>
  );
}
