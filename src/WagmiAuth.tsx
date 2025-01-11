// app.tsx
import App from './App'
import { WagmiProvider, useConnect } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './wagmiConfig/config'
import { injected } from 'wagmi/connectors'
import { useAccount } from 'wagmi'
import { useDisconnect } from 'wagmi'

function WalletDisconnect() {
    const { disconnect } = useDisconnect()
  
    return (
      <button onClick={() => disconnect()}>
        Disconnect
      </button>
    )
  }

function GetAccountAddress() {
    const account = useAccount()

    return (
        <p>{account.address}</p>
    )
  }

function WalletConnect() {
  const { connect } = useConnect()

  return (
    <button onClick={() => connect({ connector: injected() })}>
      Connect
    </button>
  )
}

const queryClient = new QueryClient()

function AppWithWagmi() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div>
            <WalletConnect></WalletConnect>
            <WalletDisconnect></WalletDisconnect>
            <GetAccountAddress></GetAccountAddress>
            <App></App>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default AppWithWagmi
