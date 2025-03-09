
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 
import InfoBox from "./components/InfoBox.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Projects from "./components/Projects.jsx"; 
import KieliTaito from "./components/KieliTaito.jsx";
import LanguageSkills from "./components/LanguageSkills.jsx";
import "./App.css";


function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
      <LoadingScreen />
      <InfoBox />
  
    
      <LanguageSkills />
      <KieliTaito />
      <Projects />
      
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
