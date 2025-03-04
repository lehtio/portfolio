import "../styles/LoadingScreen.css"; // Tuo tyylit
import { FaSpinner } from "react-icons/fa"; // FontAwesome latausikoni

export default function LoadingScreen() {
  return (
    <div className="loading-container">
      <FaSpinner className="loading-icon" />
      <p className="loading-text">This page is under construction</p>
    </div>
  );
}
