import React, { useState, useEffect } from "react";

interface ContractInfoProps {
  contractAddress: string;
  network: string;
  boxWidth?: string; // optional width prop
}

const ContractInfo: React.FC<ContractInfoProps> = ({
  contractAddress,
  network,
  boxWidth = "900px",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check on mount
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
          width: isMobile ? "90%" : boxWidth, // responsive width
          borderRadius: isMobile ? "20px" : "12px", // more rounded corners on mobile
        }}
      >
        {/* Headline */}
        <div
          style={{
            ...styles.label,
            fontSize: isMobile ? "12px" : "13px",
            marginBottom: isMobile ? "4px" : "6px",
          }}
        >
          CONTRACT ADDRESS
        </div>

        {/* Address + network + copy button */}
        <div
          style={{
            ...styles.row,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "8px" : "20px", // extra space between left & right
          }}
        >
          <div
            style={{
              ...styles.leftGroup,
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "4px" : "14px",
              alignItems: isMobile ? "flex-start" : "center",
            }}
          >
            <div
              style={{
                ...styles.value,
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              {contractAddress}
            </div>
            <div
              style={{
                ...styles.network,
                fontSize: isMobile ? "12px" : "14px",
              }}
            >
              NETWORK: {network}
            </div>
          </div>

          <button
            style={{
              ...styles.button,
              padding: isMobile ? "5px 12px" : "6px 15px",
              marginTop: isMobile ? "8px" : "0",
              width: isMobile ? "100%" : "auto",
            }}
            onClick={copyToClipboard}
          >
            COPY
          </button>
        </div>
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
    borderRadius: "12px", // default rounded corners
    padding: "20px",
    color: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    opacity: 0.7,
    marginBottom: "6px",
    letterSpacing: "1px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftGroup: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  value: {
    fontSize: "16px",
    fontWeight: 600,
  },
  network: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#00ffa3",
  },
  button: {
    padding: "6px 15px",
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
