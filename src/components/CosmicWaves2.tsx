import React from "react";
import "./CosmicWaves2.css";

const CosmicWaves2: React.FC = () => {
  const numParticles = 40;
  const particles = Array.from({ length: numParticles });

  return (
    <div className="cosmic-waves2">
      {particles.map((_, idx) => (
        <div key={idx} className="star" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 5}s`,
          width: `${1 + Math.random() * 3}px`,
          height: `${1 + Math.random() * 3}px`,
          opacity: 0.6 + Math.random() * 0.4
        }}></div>
      ))}
    </div>
  );
};

export default CosmicWaves2;
