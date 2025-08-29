import "./AboutJade.css";

const AboutJade = () => {
  return (
    <div className="aboutjade-container">
      <h2 className="aboutjade-heading">About JADE</h2>
      <div className="aboutjade-content">
        {/* Left Column */}
        <div className="aboutjade-column">
          <p className="aboutjade-text">
            JADE Token is the innovative new music crypto designed to allow
            global independent musicians to connect directly with fans through
            secure, instant transactions. By cutting out middlemen, JADE enables
            artists to retain maximum earnings and control, while fans can
            support their favorite creators through direct purchases, tip
            payments, and more! Built on blockchain tech, JADE Token ensures
            transparent and secure peer-to-peer interactions, fostering a fairer
            digital music economy worldwide. As the core token of EarthTones’
            platform, JADE offers investors a chance to participate in helping
            shape the future of peer-to-peer music pay! Take advantage of this
            limited presale. Before the Global Main Sale of Q4!
          </p>
        </div>

        {/* Right Column */}
        <div className="aboutjade-column">
          <p className="aboutjade-text">
            The JADE Token Team is a collaborative network of world class minds
            in web3, AI, and the music industry. Between them they have
            developed leading-edge social platforms, invented patented solutions
            in 3D audio and immersive fan engagement, and produced / engineered
            Grammy Award-winning music. This network of collaborators continues
            expansion - with elite contributions from influencers and domain
            experts.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="aboutjade-button-container">
        <button className="aboutjade-button">How to Buy JADE</button>
      </div>
    </div>
  );
};

export default AboutJade;
