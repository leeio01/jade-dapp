const AboutJade = () => {
  const paragraphStyle = {
    fontSize: "22px", // bigger font
    lineHeight: "1.9",
    color: "#e8f0ff",
    marginBottom: "1.5rem",
  };

  const headingStyle = {
    fontSize: "3rem", // bigger heading
    color: "#ffffff",
    marginBottom: "2rem",
  };

  const containerStyle = {
    padding: "3rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About JADE</h2>
      <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
        {/* Left Column */}
        <div style={{ flex: "1 1 45%" }}>
          <p style={paragraphStyle}>
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
        <div style={{ flex: "1 1 45%" }}>
          <p style={paragraphStyle}>
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
      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            backgroundColor: "#fffff",
            color: "#000",
            border: "none",
            padding: "0.8rem 1.5rem",
            fontSize: "1.3rem",
            borderRadius: "0.6rem",
            cursor: "pointer",
          }}
        >
          How to Buy JADE
        </button>
      </div>
    </div>
  );
};

export default AboutJade;
