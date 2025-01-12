import React from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import "./WalletConnectButton.css"

const WalletButton: React.FC = () => {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <>
          <p className='address-text'>{address?.slice(0, 5) + "......" + address?.slice(-5, -1)}</p>
          <button className='wallet-btn' onClick={() => disconnect()}>Выйти</button>
        </>
      ) : (
        <button className='wallet-btn' onClick={() => connect({ connector: injected() })}>Войти</button>
      )}
    </div>
  );
};

export default WalletButton;
