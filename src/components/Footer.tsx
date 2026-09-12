import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://linkedin.com/in/ipandla" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:ashishpandla07@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>© 2026 Ashish Pandla · Chartered Accountant · Gurugram, Haryana</p>
    </footer>
  );
}

export default Footer;