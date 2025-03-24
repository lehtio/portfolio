import InfoBox from "../components/InfoBox.jsx";
import Projektit from "../components/Projects.jsx";
import KieliTaito from "../components/LanguageSkill.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";
import Skills from "../components/Skills.jsx";

export default function Home() {
  return (
    <div className="main-content">
      <h1>This is my portfolios fist page. The plan is to build my own portfolio and then finish the project with proper desing</h1>
      <InfoBox />
      <Projektit />
      <KieliTaito />
      <Skills />

      <LoadingScreen />
    </div>
  );
}
