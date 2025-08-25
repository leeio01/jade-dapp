import React from "react";
import "./CosmicWaves.css";

const CosmicWaves: React.FC = () => {
  return (
    <div className="waves-section">
      <div className="cosmic-wave">
        <div className="wave"></div>
        <div className="wave"></div>

        {/* Overlay Text ON the waves */}
        <div className="waves-text">
          Become a JADE
          <br />
          Early Investor
        </div>
      </div>
    </div>
  );
};

export default CosmicWaves;
