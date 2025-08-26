import React from "react";
import {
  SiBinance,
  SiCocacola,
  SiEthereum,
  SiRipple,
  SiLitecoin,
  SiPolygon,
} from "react-icons/si";
import "./App.css";
import "./components/responsive.css";
import Footer from "./components/Footer";
import CosmicWaves from "./components/CosmicWaves";

// ✅ Web3Modal + Wagmi hooks
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const App: React.FC = () => {
  const logoStyle = { color: "#D3D3D3", opacity: 0.7 };

  // ✅ hooks
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  // ✅ shorten address for button
  const shortenAddress = (addr: string) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  return (
    <div className="app">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="logo">JADETOKEN</div>

        {/* ✅ Custom Button with dynamic text */}
        <button className="wallet-btn" onClick={() => open()}>
          {isConnected ? shortenAddress(address!) : "Connect Wallet"}
        </button>
      </header>

      {/* Presale + Waves Section */}
      <div className="presale-container">
        {/* LEFT SIDE: Cosmic Waves */}
        <div className="waves-section">
          <CosmicWaves />
        </div>

        {/* RIGHT SIDE: Presale Widget */}
        <div className="presale-card">
          <h2>Presale Live</h2>
          <p>Buy Jade Tokens before public launch</p>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "40%" }}></div>
          </div>
          <p>40% Sold • 600 / 1500 JADE</p>

          <input
            type="number"
            placeholder="Enter amount in ETH"
            className="input"
          />
          <button className="buy-btn">
            <span>Buy Now</span>
          </button>
        </div>

        {/* Logos behind headline */}
        <div className="crypto-marquee">
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
              <SiRipple size={36} style={logoStyle} />
              <span style={logoStyle}>Ripple</span>
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
