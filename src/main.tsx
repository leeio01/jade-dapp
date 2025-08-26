// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { mainnet } from "wagmi/chains";
import { createWeb3Modal } from "@web3modal/wagmi/react";

// 1️⃣ Your WalletConnect Project ID
const projectId = "74621c62cfe8b6b54d1de162ac1b2d6f";

// 2️⃣ Define chains (must be readonly tuple)
const chains = [mainnet] as const;

// 3️⃣ Create wagmi config
const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  metadata: {
    name: "Jade DApp",
    description: "A modern dApp with WalletConnect",
    url: "http://localhost:5173", // replace with Vercel URL
    icons: ["https://avatars.githubusercontent.com/u/37784886"]
  }
});

// 4️⃣ React Query client
const queryClient = new QueryClient();

// 5️⃣ Init Web3Modal ✅ (no `chains` here anymore)
createWeb3Modal({
  wagmiConfig,
  projectId
});

// 6️⃣ Render app
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
