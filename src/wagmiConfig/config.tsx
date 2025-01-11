// config.ts
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'


export const config = createConfig({
  chains: [mainnet, sepolia], // Укажите сети, которые вы хотите поддерживать
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(), // Транспорт для Mainnet
    [sepolia.id]: http(), // Транспорт для Sepolia
  },
})
