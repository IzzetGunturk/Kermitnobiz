import React, {useState, useRef} from 'react';
import Image from 'next/image';
import Cardspng from '../../public/images/Cards.png';

const Cards = () => {

    const [checkButton, setCheckButton] = useState<boolean>(false);
    const copyText = useRef<HTMLInputElement>(null)

    const handleCheckButton = (): void => {
        setCheckButton(true);
        setTimeout(() => {
            setCheckButton(false)
        }, 2000);

        if (copyText.current) {
            navigator.clipboard.writeText(copyText.current.value);
        }
    }

    return (
    <section className="relative w-full h-full pt-24 pb-24 xl:pl-[64px] xl:pr-[64px] lg:pl-[48px] lg:pr-[48px] max980:pl-[32px] max980:pr-[32px] max480:pl-[16px] max480:pr-[16px]" id='howtobuy'>
        <div className="absolute inset-0">
            <Image src={Cardspng} alt='Cards' className='w-full h-full object-cover' />
        </div>
        <div className='flex justify-center'>
            <div className="sm300:mx-10 mx-2 md:mx-20 max-w-[1800px] w-full">
                <div className="relative flex flex-col justify-center items-center" data-aos="fade-up">
                    <h2
                        className="font-dynapuff font-medium sm:text-7xl md:text-[45px] lg:text-[80px] text-4xl text-primary">
                        How to buy
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row gap-2 justify-center items-center relative pt-16 md:mx-20' data-aos="fade-up">
                    <input ref={copyText}
                        className='bg-white w-full border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl px-2 py-1 font-outfit font-medium text-primary'
                        readOnly value='Coming soon...'>
                    </input>

                    {checkButton ? (
                    <button onClick={handleCheckButton}
                        className='lg:mt-0 mt-2 flex flex-row gap-2 bg-primary border-primary fill-white text-white transition duration-200 border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl px-2 py-1 font-outfit font-medium'>
                        Copied
                        <div>✅</div>
                    </button>

                    ) : (

                    <button onClick={handleCheckButton}
                        className='lg:mt-0 mt-2 flex flex-row gap-2 bg-white border-primary fill-primary hover:bg-primary hover:text-white hover:fill-white transition duration-200 border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl px-2 py-1 font-outfit font-medium text-primary'>
                        Copy
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                            <path
                                d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                        </svg>
                    </button>
                    )}
                </div>
                <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto relative">
                    <div className="md:flex" data-aos="flip-left">
                        <div
                            className="bg-[#ffffffc0] border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl p-6">

                            <h2 className="text-xl 3xl:text-2xl text-primary font-dynapuff font-medium">1. Download</h2>

                            <p className="mt-1 text-sm 3xl:text-base text-secondary font-outfit font-medium">
                                Download a Solana based wallet that you enjoy, we recommend <a
                                    className='underline font-semibold hover:text-primary transition duration-200'
                                    href='https://phantom.app/'>Phantom</a> or <a
                                    className='underline font-semibold hover:text-primary transition duration 200'
                                    href='https://solflare.com/'>Solflare</a>.
                            </p>
                        </div>
                    </div>

                    <div className="md:flex" data-aos="flip-right">
                        <div
                            className="bg-[#ffffffc0] border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl p-6">

                            <h2 className="text-xl 3xl:text-2xl text-primary font-dynapuff font-medium">2. Wallet</h2>

                            <p className="mt-1 text-sm 3xl:text-base text-secondary font-outfit font-medium">
                                Send Solana to your newly created wallet. You can use any centralized exchange for this ( <a
                                    className='underline font-semibold hover:text-primary transition duration-200'
                                    href='https://bitvavo.com/nl/'>Bitvavo</a>, <a
                                    className='underline font-semibold hover:text-primary transition duration-200'
                                    href='https://www.binance.com/en'>Binance</a>, etc).
                            </p>
                        </div>
                    </div>

                    <div className="md:flex" data-aos="flip-left">
                        <div
                            className="bg-[#ffffffc0] border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl p-6">

                            <h2 className="text-xl 3xl:text-2xl text-primary font-dynapuff font-medium">3. Connect</h2>

                            <p className="mt-1 text-sm 3xl:text-base text-secondary font-outfit font-medium">
                                Head on over to pump.fun. You will be asked to connect your wallet, use your newly created
                                wallet for this.
                            </p>
                        </div>
                    </div>

                    <div className="md:flex" data-aos="flip-right">
                        <div
                            className="bg-[#ffffffc0] border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl p-6">

                            <h2 className="text-xl 3xl:text-2xl text-primary font-dynapuff font-medium">4. Buy</h2>

                            <p className="mt-1 text-sm 3xl:text-base text-secondary font-outfit font-medium">
                                Now you simply exchange your Solana for $KERMITNOBIZ tokens - Join our Telegram if you need
                                any assistence or want to talk to us!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default Cards;