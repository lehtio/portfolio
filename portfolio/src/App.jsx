import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 
import InfoBox from "./components/InfoBox.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Projektit from "./components/Projects.jsx"; 
import KieliTaito from "./components/LanguageSkill.jsx";
import CV from "./pages/CV.jsx";
import ProjektiSivu from "./pages/projektiSivu.jsx";
import Contacts from "./pages/Contacts.jsx";
import Home from "./pages/Home.jsx"; //  erillinen etusivun komponentti
import Exchange from "./pages/Exchange.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<ProjektiSivu />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
