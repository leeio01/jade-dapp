import React, { useState } from "react";
import {
  SiBinance,
  SiCocacola,
  SiEthereum,
  SiLitecoin,
  SiPolygon,
  SiBitcoin,
} from "react-icons/si";
import "./App.css";
import CosmicWaves from "./components/CosmicWaves";
import CosmicWaves2 from "./components/CosmicWaves2";
import ContractInfo from "./components/ContractInfo";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

// Import your logo
import logo from "./assets/logo.png";

const App: React.FC = () => {
  const logoStyle = { color: "#fff", opacity: 0.9 };
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const shortenAddress = (addr: string) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  // Presale states
  const [receiveAmount, setReceiveAmount] = useState(0);
  const tokenPrice = 2; // $2 per JADE token
  const payAmount = receiveAmount * tokenPrice;

  return (
    <div className="app" style={{ position: "relative" }}>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "120px", height: "auto", objectFit: "contain" }}
          />
        </div>
        <button className="wallet-btn" onClick={() => open()}>
          {isConnected ? shortenAddress(address!) : "Connect Wallet"}
        </button>
      </header>

      {/* Presale Section */}
      <div className="presale-container" style={{ position: "relative" }}>
        {/* Left: Cosmic Waves */}
        <div className="waves-section">
          <CosmicWaves />
        </div>

        {/* Right: Modern Presale Card */}
        <div className="presale-card modern-presale">
          <h2 className="usd-raised">USD Raised</h2>
          <p className="raised-amount">$100,000.00 / $1,000,000.00</p>

          {/* Modern Pay / Receive Container */}
          <div className="modern-container">
            <div className="modern-box">
              <label>You Pay (USD)</label>
              <input type="text" value={`$${payAmount.toFixed(2)}`} readOnly />
            </div>
            <div className="modern-box">
              <label>You Get ($JADE)</label>
              <input
                type="number"
                placeholder="0"
                value={receiveAmount}
                onChange={(e) => setReceiveAmount(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Accepting currencies */}
          <div
            className="accepting-inline"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <span>Accepting:</span>
            <div style={{ display: "flex", gap: "12px" }}>
              <SiEthereum size={20} style={{ color: "#fff" }} />
              <SiBitcoin size={20} style={{ color: "#fff" }} />
              <SiPolygon size={20} style={{ color: "#fff" }} />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "10%" }}></div>
          </div>

          {/* Buy Now Button */}
          <button className="buy-btn" onClick={() => open()} disabled={isConnected}>
            {isConnected ? "Wallet Connected" : "Buy Now"}
          </button>
        </div>

        {/* Presale Message Fixed to Left Side of Screen */}
        <p
          className="presale-message"
          style={{
            position: "absolute",
            left: "110px",
            top: "300px",
            color: "#fff",
            opacity: 0.5,
            fontSize: "18px",
            fontWeight: 500,
            maxWidth: "400px",
          }}
        >
          Step into the AI-powered crypto revolution. Join our presale journey to
          be part of reshaping the intersection of blockchain and music.
        </p>

        {/* Logos marquee */}
        <div className="crypto-marquee" style={{ marginTop: "0px" }}>
          <div className="crypto-track">
            <div className="logo-item">
              <SiBinance size={36} style={logoStyle} />
              <span style={logoStyle}>Binance</span>
            </div>
            <div className="logo-item">
              <SiCocacola size={36} style={logoStyle} />
              <span style={logoStyle}>CocaCola</span>
            </div>
            <div className="logo-item">
              <SiEthereum size={36} style={logoStyle} />
              <span style={logoStyle}>Ethereum</span>
            </div>
            <div className="logo-item">
              <SiLitecoin size={36} style={logoStyle} />
              <span style={logoStyle}>Litecoin</span>
            </div>
            <div className="logo-item">
              <SiPolygon size={36} style={logoStyle} />
              <span style={logoStyle}>Polygon</span>
            </div>
          </div>
        </div>

        {/* Mobile adjustments */}
        <style>
          {`
            @media (max-width: 768px) {
              .crypto-marquee {
                margin-top: 66px !important; /* push slider down on mobile */
              }

              .presale-message {
                left: auto !important;       /* remove left positioning */
                right: 20px !important;      /* move box to the right side */
                top: 180px !important;       /* vertical position */
                max-width: 90% !important;
                font-size: 16px !important;
                text-align: left;            /* keep text aligned left inside the box */
              }
            }
          `}
        </style>
      </div>

      {/* Contract Info */}
      <section className="contract-info-section">
        <ContractInfo
          contractAddress="0x6a145d811f6cf02a2086dc52ff718d76fcaf78cd"
          network="POLYGON"
        />
      </section>

      {/* Cosmic waves under presale */}
      <section className="cosmicwaves2-section">
        <CosmicWaves2 />
      </section>
    </div>
  );
};

export default App;
