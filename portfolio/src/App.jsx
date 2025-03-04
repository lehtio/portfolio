import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 
import LoadingScreen from "./components/LoadingScreen.jsx";
import Projects from "./components/Projects.jsx"; 
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
      <h1>Portfoliojuttuja</h1>
      <LoadingScreen />
      
      {/*<LoadingScreen /> */}
      <p>Here will be the content of the page (tällä hetkellä loading symbol on kommentoituna pois)</p>
      <Projects />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
