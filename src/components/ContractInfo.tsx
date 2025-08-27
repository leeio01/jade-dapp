import React from "react";

interface ContractInfoProps {
  contractAddress: string;
  network: string;
  boxWidth?: string; // optional width prop
}

const ContractInfo: React.FC<ContractInfoProps> = ({
  contractAddress,
  network,
  boxWidth = "900px", // ✅ adjust width here
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Address copied!");
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.box, width: boxWidth }}>
        {/* Headline on first row */}
        <div style={styles.label}>CONTRACT ADDRESS</div>

        {/* Sub row with address + network + copy */}
        <div style={styles.row}>
          <div style={styles.leftGroup}>
            <div style={styles.value}>{contractAddress}</div>
            <div style={styles.network}>NETWORK: {network}</div>
          </div>

          <button style={styles.button} onClick={copyToClipboard}>
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
    borderRadius: "12px",
    padding: "20px",
    color: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    opacity: 0.7,
    marginBottom: "6px", // ✅ closer spacing headline → sub
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
    gap: "14px", // space between address & network
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
