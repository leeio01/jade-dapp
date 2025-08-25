import React from "react";
import "./Footer.css"; // We'll create this next

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">JADETOKEN</div>
          <p>© 2025 JADE. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <a href="#presale">Presale</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
