import React, { FC, } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from "@solana/wallet-adapter-react-ui";
// import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Airdrop from "./components/Airdrop";
import SignMessage from "./components/SignMessage";
import Navbar from "./components/Navbar";
import SendTokens from "./components/SendTokens";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";

const App = () => {
  


  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/rEnmxmf8us1FM5zrnasdjWz7jKPuYSbc"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Airdrop />} />
            <Route path="/signMessage" element={<SignMessage />} />
            <Route path="/sendTokens" element={<SendTokens />} />
          </Routes>
          <Footer />
        </Router>
          

        </WalletModalProvider>
      </WalletProvider>
      <ToastContainer position="top-right" autoClose={3000}   />
    </ConnectionProvider>
  );
};

export default App;


