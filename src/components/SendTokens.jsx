import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React from 'react';
import { toast } from 'react-toastify';

const SendTokens = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const handleTokenTransaction = async () => {
    if (!wallet.connected || !wallet.publicKey) {
      toast("Please connect your wallet first!");
      return;
    }

    const toSender = document.getElementById('to').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!toSender || isNaN(amount) || amount <= 0) {
      toast("Please enter a valid recipient and amount.");
      return;
    }

    try {
      const transaction = new Transaction();
      transaction.add(SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(toSender),
        lamports: amount * LAMPORTS_PER_SOL
      }));

      await wallet.sendTransaction(transaction, connection);
      toast(`Sent ${amount} SOL to ${toSender}`);
    } catch (error) {
      console.error(error);
      toast("Transaction failed: " + error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-[70vh] px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-[#542cac]'>Solana Token Sender</h1>
        <p className='text-gray-600 mt-2'>Send SOL to any wallet address easily</p>
      </div>

      <div className='flex flex-col md:flex-row gap-4 w-full max-w-md'>
        <input
          id='to'
          type='text'
          placeholder='Enter recipient PublicKey'
          className='flex-1 border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          id='amount'
          type='text'
          placeholder='Amount in SOL'
          className='flex-1 border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <button
        onClick={handleTokenTransaction}
        className='mt-6 bg-[#542cac] text-white font-semibold py-2 px-6 rounded-md transition duration-200'
      >
        Send
      </button>
    </div>
  );
};

export default SendTokens;
