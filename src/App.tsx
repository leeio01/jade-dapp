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
import AboutJade from "./components/AboutJade";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

// Import your logos
import logo from "./assets/logo.png";
import tokenLogo from "./assets/tokenlogo.png";

const App: React.FC = () => {
  const logoStyle = { color: "#fff", opacity: 0.9 };
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const shortenAddress = (addr: string) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  // Presale states
  const [payAmount, setPayAmount] = useState<number>(0);
  const tokenPrice = 0.01; // 1 JADE = $0.01
  const receiveAmount = payAmount / tokenPrice;

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

        {/* Right: Presale Card */}
        <div className="presale-card modern-presale">
          {/* Header Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <h2 style={{ color: "#fff", margin: 0 }}>Buy $JADE Token</h2>
            <span
              style={{
                background: "red",
                color: "#fff",
                fontSize: "24px",
                fontWeight: "600",
                maxWidth: "500px",
                padding: "4px 10px",
                borderRadius: "12px",
              }}
            >
              LIVE
            </span>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "0.020%", background: "#00ff88" }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "14px",
              color: "#fff",
              marginTop: "5px",
            }}
          >
            $100 / $500,000
          </div>

          {/* Token Prices (one line) */}
          <div
            style={{
              marginTop: "15px",
              color: "#fff",
              fontSize: "14px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <span>1 $JADE = $0.01</span>
            <span>|</span>
            <span>LISTING PRICE = TBA</span>
          </div>

          {/* Stats Box */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "12px",
              padding: "15px",
              marginTop: "15px",
              color: "#fff",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              <span>TOKENS SOLD:</span>
              <span>USD RAISED:</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <span>10,000 / 50,000,000</span>
              <span>$100 / $500,000</span>
            </div>
          </div>

          {/* Modern Pay / Receive Container */}
          <div className="modern-container" style={{ marginTop: "20px" }}>
            <div className="modern-box">
              <label>You Pay (USD)</label>
              <input
                type="number"
                placeholder="0.00"
                value={payAmount}
                onChange={(e) => setPayAmount(Number(e.target.value))}
              />
            </div>
            <div className="modern-box">
              <label>You Get ($JADE)</label>
              <input type="number" value={receiveAmount} readOnly />
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
            <span style={{ color: "#fff" }}>Accepting:</span>
            <div style={{ display: "flex", gap: "12px" }}>
              <SiEthereum size={20} style={{ color: "#fff" }} />
              <SiBitcoin size={20} style={{ color: "#fff" }} />
              <SiPolygon size={20} style={{ color: "#fff" }} />
            </div>
          </div>

          {/* Buy Now Button */}
          <button
            className="buy-btn"
            onClick={() => open()}
            disabled={isConnected}
          >
            {isConnected ? "Wallet Connected" : "Buy Now"}
          </button>
        </div>

        {/* Presale Message */}
        <p
          className="presale-message"
          style={{
            position: "absolute",
            left: "110px",
            top: "300px",
            color: "#fff",
            opacity: 0.85,
            fontSize: "24px", // ⬅️ Bigger text
            fontWeight: 600,  // ⬅️ More bold
            maxWidth: "500px",
            lineHeight: "1.5",
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
              <span style={logoStyle}>PramatixAI</span>
            </div>
            <div className="logo-item">
              <SiCocacola size={36} style={logoStyle} />
              <span style={logoStyle}>Tendermint</span>
            </div>
            <div className="logo-item">
              <SiEthereum size={36} style={logoStyle} />
              <span style={logoStyle}>WINTERMUTE</span>
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

        {/* Responsive Styling */}
        <style>
          {`
            /* Move card up on desktop (close gap) */
            @media (min-width: 769px) {
              .modern-presale {
                margin-top: -60px;
              }
            }

            /* Keep normal on mobile */
            @media (max-width: 768px) {
              .crypto-marquee {
                margin-top: 66px !important;
              }
              .presale-message {
                left: auto !important;
                right: 20px !important;
                top: 200px !important;
                max-width: 90% !important;
                font-size: 18px !important; /* slightly smaller on mobile */
                text-align: left;
              }
              .modern-presale {
                margin-top: 20px !important;
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
          logo={tokenLogo}
        />
      </section>

      {/* Cosmic waves under presale */}
      <section className="cosmicwaves2-section">
        <CosmicWaves2 />
      </section>

      {/* About JADE Section */}
      <section className="aboutjade-section" style={{ marginTop: "50px" }}>
        <AboutJade />
      </section>
    </div>
  );
};

export default App;
