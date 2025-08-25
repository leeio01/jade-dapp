import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="logo">JADETOKEN</div>
        <button className="wallet-btn">Connect Wallet</button>
      </header>

      {/* Two-column section */}
      <div className="main-section">
        {/* Left Info */}
        <div className="info-card">
          <h2>Become a JADE</h2>
          <h3>Early Investor</h3>
          <p>
            Step into the AI-powered crypto revolution. Join our presale journey
            to be part of reshaping the intersection of blockchain and music.
          </p>
        </div>

        {/* Right Presale Widget (size unchanged) */}
        <div className="presale-container">
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
      </div>
    </div>
  );
};

export default App;
