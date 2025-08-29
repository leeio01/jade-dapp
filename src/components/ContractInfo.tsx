import React, { useState, useEffect } from "react";

interface ContractInfoProps {
  contractAddress: string;
  network: string;
  logo: string;
  boxWidth?: string;
}

const ContractInfo: React.FC<ContractInfoProps> = ({
  contractAddress,
  network,
  logo,
  boxWidth = "900px",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Address copied!");
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.box,
          width: isMobile ? "85%" : boxWidth,
          borderRadius: isMobile ? "20px" : "12px",
        }}
      >
        {isMobile ? (
          // Mobile layout: Logo | CONTRACT ADDRESS + actual address | Copy icon
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            {/* Logo */}
            <img
              src={logo}
              alt="Token Logo"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 0 8px rgba(0,0,0,0.3)",
              }}
            />

            {/* Contract Address */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#aaa",
                  letterSpacing: "1px",
                }}
              >
                CONTRACT ADDRESS
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#fff",
                    wordBreak: "break-all",
                    flex: 1,
                  }}
                >
                  {contractAddress}
                </span>

                {/* Copy icon only on mobile */}
                <button
                  onClick={copyToClipboard}
                  style={{
                    ...styles.button,
                    padding: "5px 8px",
                    width: "auto",
                  }}
                >
                  📋
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Desktop layout: Logo + Contract Details with Copy button on right
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            {/* Left: Logo + Contract Details */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              {/* Logo */}
              <img
                src={logo}
                alt="Token Logo"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 0 8px rgba(0,0,0,0.3)",
                }}
              />

              {/* Contract Details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#aaa",
                    letterSpacing: "1px",
                  }}
                >
                  CONTRACT ADDRESS
                </span>
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    wordBreak: "break-all",
                    color: "#fff",
                  }}
                >
                  {contractAddress} {" "} NETWORK: {network}
                </span>
              </div>
            </div>

            {/* Right: Copy button */}
            <button
              style={{
                ...styles.button,
                padding: "6px 15px",
              }}
              onClick={copyToClipboard}
            >
              COPY
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
    width: "100%",
  },
  box: {
    background: "#1a1a1f",
    borderRadius: "12px",
    padding: "20px",
    color: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
  },
  button: {
    background: "#00ffa3",
    border: "none",
    borderRadius: "50px",
    color: "#000",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default ContractInfo;
