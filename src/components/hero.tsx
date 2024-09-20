import React from 'react';
import Image from 'next/image';
import Heroimg from '../../public/Hero.png';
import Kermit from '../../public/Kermit.png';

const Hero = () => {
return (
<section className="relative w-full min-h-screen flex items-center justify-center pt-36">
    <div className="absolute inset-0">
        <Image src={Heroimg} alt='Hero Image' layout='fill' objectFit='cover' className='w-full h-full' />
    </div>
    <div className='sm300:mx-10 mx-2 md:mx-20'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-32">
            <div className="relative md:pt-10 order-last lg:h-full">
                <Image src={Kermit} width={550} height={600} alt="Kermit" />
            </div>

            <div className="order-first relative flex flex-col gap-[24px] lg:pt-16">
                <div className='font-dynapuff font-medium text-xl md:text-2xl text-secondary'>
                    But that’s none of my business...
                </div>
                <h1 className='font-dynapuff font-medium sm:text-7xl md:text-[45px] lg:text-[90px] text-4xl text-primary'>
                    $KERMITNOBIZ
                </h1>
                <h2 className='font-outfit font-semibold text-lg text-secondary'>
                    Welcome to $KERMITNOBIZ, the memecoin inspired by the iconic Kermit "But that’s none of my business" meme. Stay cool, sip your tea, and ride the crypto waves—because who’s got time for the drama?
                </h2>
                <div className='lg:flex flex-col md:flex-row gap-2'>
                    <input className='bg-white border-primary border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl px-2 py-1 font-outfit font-medium text-primary w-full' readOnly value='Ca: 4xK3Rm1tNoBiz9PQr56T8vG72LkFJz91Xy7WmH'></input>
                    <button className='lg:mt-0 mt-2 flex flex-row gap-2 bg-white border-primary fill-primary hover:bg-primary hover:text-white hover:fill-white transition duration-200 border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl px-2 py-1 font-outfit font-medium text-primary'>
                        Copy
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                            <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row gap-3">
                    <a href=""
                        className="bg-primary hover:bg-white hover:border-primary border-2 border-primary rounded-full transition duration-200">
                        <svg className='fill-white hover:fill-primary' height="36" viewBox="0 0 32 32" width="36" xmlns="http://www.w3.org/2000/svg">
                            <path d="m8.09992 15.7083c4.29498-1.8712 7.15898-3.1049 8.59198-3.7009 4.0915-1.7018 4.9416-1.9974 5.4958-2.0073.1218-.00205.3943.0282.5709.1714.149.1209.19.2843.2097.399.0196.1146.044.3759.0246.58-.2217 2.3296-1.1811 7.983-1.6692 10.5922-.2065 1.1041-.6132 1.4743-1.0069 1.5105-.8555.0787-1.5052-.5654-2.3339-1.1086-1.2967-.85-2.0292-1.3792-3.2879-2.2086-1.4546-.9586-.5116-1.4854.3174-2.3464.2169-.2253 3.9866-3.6541 4.0595-3.9652.0092-.0389.0176-.1839-.0685-.2605-.0862-.0765-.2133-.0503-.3051-.0295-.13.0295-2.2015 1.3987-6.2144 4.1075-.588.4038-1.1206.6005-1.5977.5902-.5261-.0114-1.53798-.2975-2.29022-.542-.92265-.2999-1.65596-.4585-1.5921-.9678.03326-.2653.3986-.5367 1.09604-.814z"/>
                        </svg>
                    </a>
                    <a href=""
                        className="bg-primary hover:bg-white hover:border-primary border-2 border-primary rounded-full transition duration-200">
                        <svg className='fill-white hover:fill-primary' width="36" height="36" viewBox="0 0 167 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M93.8804 68.7359L134.465 23H124.851L89.5967 62.7037L61.4602 23H29L71.5572 83.0448L29 131H38.6138L75.8191 89.0626L105.54 131H138M42.0836 30.0285H56.8531L124.844 124.317H110.071"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
);
};

export default Hero;