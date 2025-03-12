import InfoBox from "../components/InfoBox.jsx";
import Projektit from "../components/Projects.jsx";
import KieliTaito from "../components/LanguageSkill.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";

export default function Home() {
  return (
    <div className="main-content">
      <InfoBox />
      <Projektit />
      <KieliTaito />
      <LoadingScreen />
    </div>
  );
}
