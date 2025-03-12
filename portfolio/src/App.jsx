
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 
import InfoBox from "./components/InfoBox.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Projektit from "./components/Projects.jsx"; 
import KieliTaito from "./components/LanguageSkill.jsx";

import "./App.css";


function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
      <LoadingScreen />
      <InfoBox />
     
      <Projektit />
    
      <KieliTaito />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
