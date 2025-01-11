// profile.tsx
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export function Profile() {
  const { address, isConnected } = useAccount() // Получаем данные об аккаунте
  const { connect } = useConnect({ connector: new InjectedConnector() }) // Подключаем MetaMask
  const { disconnect } = useDisconnect() // Отключаем кошелек

  if (isConnected)
    return (
      <div>
        <p>Подключен: {address}</p>
        <button onClick={() => disconnect()}>Отключить</button>
      </div>
    )

  return <button onClick={() => connect()}>Подключить MetaMask</button>
}
