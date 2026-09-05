import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://ui-avatars.com/api/?name=Ashish+Pandla&size=300&background=5000ca&color=fff&bold=true&rounded=true&font-size=0.33" alt="Ashish Pandla" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://linkedin.com/in/ipandla" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:ashishpandla07@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Ashish Pandla</h1>
          <p>Senior Finance Leader | CA | FP&A & Financial Controlling</p>

          <div className="mobile_social_icons">
            <a href="https://linkedin.com/in/ipandla" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:ashishpandla07@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;