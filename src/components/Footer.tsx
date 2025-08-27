import React from "react";
import "./Footer.css";
import { FaTwitter, FaTelegramPlane, FaDiscord, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + tagline */}
        <div className="footer-section">
          <h2 className="footer-logo">JADETOKEN</h2>
          <p className="footer-tagline">
            Powering the future of decentralized finance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#presale">Presale</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer">
              <FaTelegramPlane />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              <FaDiscord />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 JADE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
