import React from "react";
import "./App.css";
import "./components/responsive.css";
import Footer from "./components/Footer";
import CosmicWaves from "./components/CosmicWaves";

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="logo">JADETOKEN</div>
        <button className="wallet-btn">Connect Wallet</button>
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
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
