import React from "react";

interface ContractInfoProps {
  contractAddress: string;
  network: string;
  width?: string;
}

const ContractInfo: React.FC<ContractInfoProps> = ({
  contractAddress,
  network,
  width = "90%",
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Address copied!");
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.box, width }}>
        {/* Header Row */}
        <div style={{ ...styles.row, ...styles.headerRow }}>
          <div style={{ ...styles.col, flex: 3, textAlign: "left" }}>CONTRACT ADDRESS</div>
          <div style={{ ...styles.col, flex: 1, textAlign: "left" }}>NETWORK</div>
          <div style={{ ...styles.col, flex: 1 }}>COPY ADDRESS</div>
        </div>

        {/* Value Row */}
        <div style={{ ...styles.row, marginBottom: 0 }}>
          <div style={{ ...styles.col, flex: 3, textAlign: "left" }}>{contractAddress}</div>
          <div style={{ ...styles.col, flex: 1, textAlign: "left" }}>{network}</div>
          <div style={{ ...styles.col, flex: 1 }}>
            <button style={styles.button} onClick={copyToClipboard}>
              COPY
            </button>
          </div>
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
    borderRadius: "10px",
    padding: "8px",
    maxWidth: "1200px",
    color: "white",
    textAlign: "center",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  headerRow: {
    opacity: 0.5,
    fontWeight: 600,
    fontSize: "14px",
    paddingBottom: "2px",
  },
  col: {
    padding: "5px 10px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#fff",
    textAlign: "center",
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
