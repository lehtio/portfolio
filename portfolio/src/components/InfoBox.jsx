import { Link } from "react-router-dom";
import profileAvatar from "../images/profile-avatar.webp";
/*import "../styles/InfoBox.css"; */ // Import the CSS file

export default function InfoBox() {
  return (
    <div className="info-box">
      <div className="info-content">
        <h1>Laura Lehtiö</h1>
        <p>
          Hi, I'm Laura, third year information and software engineering student. I'm currently doing my 
          exchange semester in TU Graz studying industrial management. If you are interested to know more about my studies abroad, I highly recommend you to 
          check my <Link to="/exchange">Exchange</Link> site.
        </p>
        <p>Here you can find information about my projects, skills, and experience! Don't hesitate to ask if you have something in your mind.</p>
      
      </div>
      <div className="info-image">
        <img src={profileAvatar} alt="Profile avatar" className="profile-avatar" />
      </div>
    </div>
  );
}