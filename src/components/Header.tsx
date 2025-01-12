import React from 'react';
import "./Header.css"
import SearchBar from './SearchBar';
import WalletConnectButton from './WalletConnectButton';

type HeaderProps = {
    onSearch: (query: string) => void;
    className?: string;
  };

  const Header: React.FC<HeaderProps> = ({ onSearch }) => { 
    return (
      <header className="header">
        <h1 className='logo'>ASK&BID</h1>
        <SearchBar onSearch={onSearch} />
        <WalletConnectButton></WalletConnectButton>
      </header>
    );
  };

export default Header;
