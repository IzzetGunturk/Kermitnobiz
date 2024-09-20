import React from 'react';
import Image from 'next/image';
import Kermit from '../../public/Kermit.png';

const Slider = () => {
return (
<section className='bg-black'>
  
  <div className="relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
    <div className="animate-slide-left-infinite inline-block w-max">
     
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
    </div>

    <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
      
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
    </div>
  </div>
</section>
);
};

export default Slider;