import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx"; 
import CV from "./pages/CV.jsx";
import ProjektiSivu from "./pages/projektiSivu.jsx";
import Contacts from "./pages/Contacts.jsx";
import Home from "./pages/Home.jsx"; //  erillinen etusivun komponentti
import "./App.css";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<ProjektiSivu />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;