import React from 'react';
import Image from 'next/image';
import Cardspng from '../../public/Cards.png';

const Cards = () => {
return (
<section className="relative w-full min-h-screen pt-16">
    <div className="absolute inset-0">
        <Image src={Cardspng} alt='Cards' className='w-full h-full object-cover' />
    </div>
    <div className="sm300:mx-10 mx-2 md:mx-20">
        <div className="relative flex flex-col justify-center items-center">
            <h2 className="font-dynapuff font-medium sm:text-7xl md:text-[45px] lg:text-[80px] text-4xl text-primary">
                How to buy
            </h2>
        </div>
        <div className='flex flex-col md:flex-row gap-2 justify-center items-center relative pt-16 md:mx-20'>
            <input
                className='bg-white w-full border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl px-2 py-1 font-outfit font-medium text-primary'
                readOnly value='Ca: 4xK3Rm1tNoBiz9PQr56T8vG72LkFJz91Xy7WmH'>
            </input>
            <button
                className='lg:mt-0 mt-2 flex flex-row gap-2 bg-white border-primary fill-primary hover:bg-primary hover:text-white hover:fill-white transition duration-200 border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl px-2 py-1 font-outfit font-medium text-primary'>
                Copy
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path
                        d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                </svg>
            </button>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto relative">
            <div className="flex">
                <div className="bg-[#ffffffc0] border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl p-6">

                    <h2 className="text-xl text-primary font-dynapuff font-medium">1. Download</h2>

                    <p className="mt-1 text-sm text-secondary font-outfit font-medium">
                    Download a Solana based wallet that you enjoy, we recommend Phantom or Solflare
                    </p>
                </div>
            </div>

            <div className="flex">
                <div className="bg-[#ffffffc0] border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl p-6">

                    <h2 className="text-xl text-primary font-dynapuff font-medium">2. Wallet</h2>

                    <p className="mt-1 text-sm text-secondary font-outfit font-medium">
                        Send Solana to your newly created wallet. You can use any centralized exchange for this (Binance, Bitvavo, etc)
                    </p>
                </div>
            </div>

            <div className="flex">
                <div className="bg-[#ffffffc0] border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl p-6">

                    <h2 className="text-xl text-primary font-dynapuff font-medium">3. Connect</h2>

                    <p className="mt-1 text-sm text-secondary font-outfit font-medium">
                        Head on over to pump.fun. You will be asked to connect your wallet, use your newly created wallet for this
                    </p>
                </div>
            </div>

            <div className="flex">
                <div className="bg-[#ffffffc0] border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl p-6">

                    <h2 className="text-xl text-primary font-dynapuff font-medium">4. Buy</h2>

                    <p className="mt-1 text-sm text-secondary font-outfit font-medium">
                        Now you simply exchange your Solana for $KERMITNOBIZ tokens - Join our Telegram if you need any assistence or want to talk to us!
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
);
};

export default Cards;