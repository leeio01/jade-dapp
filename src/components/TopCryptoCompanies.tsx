import React from "react";
import { FaBrain, FaSeedling, FaSnowflake, FaCheckCircle, FaCloud } from "react-icons/fa";
import "./TopCryptoCompanies.css";

const TopCryptoCompanies: React.FC = () => {
  const logoStyle = { color: "#fff", margin: "0 20px" };

  return (
    <div className="crypto-marquee">
      <div className="crypto-track">
        {/* New companies */}
        <div className="logo-item">
          <FaBrain size={60} style={logoStyle} />
          <span style={logoStyle}>PramatixAI</span>
        </div>
        <div className="logo-item">
          <FaSeedling size={60} style={logoStyle} />
          <span style={logoStyle}>Febsermint</span>
        </div>
        <div className="logo-item">
          <FaSnowflake size={60} style={logoStyle} />
          <span style={logoStyle}>Wintermute</span>
        </div>
        <div className="logo-item">
          <FaCheckCircle size={60} style={logoStyle} />
          <span style={logoStyle}>1Confirmation</span>
        </div>
        <div className="logo-item">
          <FaCloud size={60} style={logoStyle} />
          <span style={logoStyle}>OrionCloud</span>
        </div>
      </div>
    </div>
  );
};

export default TopCryptoCompanies;
