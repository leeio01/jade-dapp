import React from "react";
import { SiBinance, SiCocacola } from "react-icons/si";
import "./TopCryptoCompanies.css";

const TopCryptoCompanies: React.FC = () => {
  return (
    <div className="crypto-marquee">
      <div className="crypto-track">
        <SiBinance size={60} color="#FFFFFF" />
        <SiCocacola size={60} color="#FFFFFF" />
        <SiBinance size={60} color="#FFFFFF" />
        <SiCocacola size={60} color="#FFFFFF" />
      </div>
    </div>
  );
};

export default TopCryptoCompanies;
