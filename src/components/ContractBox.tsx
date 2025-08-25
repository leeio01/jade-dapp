import React, { useState } from "react";

type Props = {
  contractAddress: string;
  network: string;
  logoSrc?: string; // optional path to logo image in /src/assets
};

const explorerForNetwork = (network: string) => {
  const n = network.toLowerCase();
  if (n.includes("polygon") || n.includes("matic")) return "https://polygonscan.com/address/";
  if (n.includes("bsc") || n.includes("binance")) return "https://bscscan.com/address/";
  if (n.includes("ethereum") || n.includes("eth")) return "https://etherscan.io/address/";
  // default
  return "https://etherscan.io/address/";
};

const ContractBox: React.FC<Props> = ({ contractAddress, network, logoSrc }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contractAddress);
      } else {
        // fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = contractAddress;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const explorerBase = explorerForNetwork(network);
  const explorerUrl = `${explorerBase}${contractAddress}`;

  return (
    <div className="contract-box">
      {/* LEFT: logo + address */}
      <div className="contract-left">
        <div className="contract-logo">
          {logoSrc ? (
            <img src={logoSrc} alt="token logo" />
          ) : (
            <div style={{ width: 32, height: 32, background: "#222", borderRadius: "50%" }} />
          )}
        </div>

        <div className="contract-details">
          <div className="label">Contract Address</div>
          <div className="address">
            {/* clickable link to explorer */}
            <a href={explorerUrl} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
              {contractAddress}
            </a>
          </div>
        </div>
      </div>

      {/* MIDDLE: network */}
      <div className="network">
        <div className="label">Network</div>
        <div className="name">{network}</div>
      </div>

      {/* RIGHT: copy button */}
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Address"}
        {/* small inline SVG copy icon (no external lib needed) */}
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden>
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
  );
};

export default ContractBox;
