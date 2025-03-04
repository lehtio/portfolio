import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 
import LoadingScreen from "./components/LoadingScreen.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
      <LoadingScreen />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
