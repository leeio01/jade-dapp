import React from "react";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left side: About text */}
        <div className="about-left">
          <h2>About</h2>
          <p>
            JADE Token is the innovative new music crypto designed to allow global 
            independent musicians to connect directly with fans through secure, instant 
            transactions. By cutting out middlemen, JADE enables artists to retain maximum earnings and 
            control, while fans can support their favorite creators through direct 
            purchases, tip payments, and more! Built on blockchain tech, JADE Token ensures 
            transparent and secure peer-to-peer interactions, fostering a fairer digital music 
            economy worldwide. As the core token of EarthTones’ platform, JADE offers investors a chance to participate 
            in helping shape the future of peer-to-peer music pay! Take advantage of this limited presale.
            Before the Global Main Sale of Q4!
          </p>
        </div>

        {/* Right side: Cards */}
        <div className="about-right">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To revolutionize DeFi by creating transparent, fair, and efficient
              tools that empower the blockchain community.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              Building the most trusted decentralized ecosystem with sustainable
              growth and long-term value for holders.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Team</h3>
            <p>
              A group of passionate blockchain developers, designers, and
              community leaders working together for innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
