import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const WalletButton: React.FC = () => {
  return (
    <div>
      <ConnectButton
        showBalance={false}
        chainStatus="icon"
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
      />
    </div>
  );
};

export default WalletButton;
