// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Wagmi + Query
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Web3Modal setup
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { mainnet } from "wagmi/chains";
const projectId = "74621c62cfe8b6b54d1de162ac1b2d6f";

// Wagmi config
const chains = [mainnet];
const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
});

// React Query client
const queryClient = new QueryClient();

// Initialize Web3Modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
