import React from 'react';
import Image from 'next/image';
import Giphy from '../../public/images/giphy.webp';

const Errorpage = () => {

return (
    <div className='flex items-center justify-center flex-col h-screen gap-6 sm300:mx-10 mx-2 md:mx-20'>
        <h1 className='font-dynapuff text-6xl font-semibold text-primary'>Page not found...</h1>
        <Image src={Giphy} alt='Gif' width={600} height={600} />
        <a href='/' className='lg:mt-0 mt-2 flex flex-row gap-2 bg-white border-primary fill-primary hover:bg-primary hover:text-white hover:fill-white transition duration-200 border-t-2 border-l-2 border-r-2 border-b-[3px] rounded-xl px-2 py-1 font-outfit font-medium text-primary'>
            Go back to home
        </a>
    </div>
)}

export default Errorpage;