import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect } from 'react'

const GetBalance = ({ balance, setBalance}) => {
    const {connection} = useConnection();
    const {publicKey, connected} = useWallet();
    // const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async() => {
            if(publicKey) {
                const bal = await connection.getBalance(publicKey);
                setBalance(bal / LAMPORTS_PER_SOL);
            }
        }

        fetchBalance();
    }, [publicKey, connection, connected])
  return (
    <div className='flex justify-center place-items-center gap-4'>
      <h1 className='text-2xl'>Wallet Balance : </h1>
      <span className='text-[1.3rem] text-gray-500 font-semibold mt-1'>{connected && balance !== null ? `${balance.toFixed(2)} SOL` : "0 SOL"}</span>
    </div>
  )
}

export default GetBalance;
