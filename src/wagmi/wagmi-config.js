import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, blast, blastSepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
export const config = createConfig({
  autoConnect: true,
  chains: [mainnet, sepolia, blast, blastSepolia],
  connectors: [
    injected(),
    walletConnect({ projectId: 'd95ebe5f9fcbd2cc9241e3bc197790a8' }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [blast.id]: http(),
    [blastSepolia.id]: http(),
  },
})