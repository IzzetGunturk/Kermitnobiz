import React from 'react';
import Image from 'next/image';
import Kermitcrypto from '../../public/Kermitcryptomonitor.png';
import Aboutpng from '../../public/About.png';

const About = () => {
return (
<section className="relative w-full min-h-screen flex items-center justify-center pt-16 lg:pt-0" id='about'>
  <div className="absolute inset-0">
    <Image src={Aboutpng} alt='About' className='w-full h-full object-cover' />
  </div>
  <div className="sm300:mx-10 mx-2 md:mx-20">
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
      <div className="relative md:pt-10 lg:order-last lg:h-full">
        <Image src={Kermitcrypto} alt="Kermitcrypto" className='rounded-xl' width={450} height={450} />
      </div>

      <div className="pb-10 relative lg:pt-8 text-secondary lg:order-first">
        <h2 className="font-dynapuff font-medium sm:text-7xl md:text-[45px] lg:text-[80px] text-4xl text-primary">About
        </h2>
        <h3 className="font-outfit font-semibold text-sm mt-4 text-secondary">
          Welcome to $KermitNoBiz, the memecoin that's all about keeping it chill while sipping tea and watching the
          world go by! Inspired by the iconic Kermit “But That’s None of My Business” meme, our coin embodies the art of
          staying cool and unbothered, no matter what the crypto market throws your way.
          <br></br>
          <br></br>
          At $KermitNoBiz, we believe in having fun and not sweating the small stuff. Our mission is to provide a
          laid-back, humorous, and engaging way to participate in the world of cryptocurrencies. Whether you’re a
          seasoned investor or just here for the memes, our coin is designed to bring a smile to your face and a bit of
          zen to your portfolio.
          <br></br>
          <br></br>
          Join us in embracing the calm, sip your tea, and leave the drama behind. With $KermitNoBiz, it’s all about
          enjoying the ride with a touch of humor and a whole lot of chill.
          <br></br>
          <br></br>
          <span className='text-primary font-dynapuff font-semibold'>Stay Cool. Stay Unbothered. Stay Memetastic.</span>
        </h3>
      </div>
    </div>
  </div>
</section>
);
};

export default About;