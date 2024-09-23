import React from 'react';
import Slider from '@/components/slider';

const Footer = () => {

return (
<>
<footer className='bg-primary p-10 flex flex-col gap-6 justify-center items-center text-center'>
    <div className='font-dynapuff text-bold text-5xl text-white'>
        Follow us
    </div>
    <div className='font-dynapuff text-bold text-2xl text-[#ffffffa2] flex'>
        Join the $KERMITNOBIZ community
    </div>
    <div className="flex items-center gap-10">
        <div className="flex flex-row gap-3">
            <a href="" className="border-white border-2 hover:bg-white rounded-full transition duration-200">
                <svg className='fill-white hover:fill-primary' height="32" viewBox="0 0 32 32" width="32"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m8.09992 15.7083c4.29498-1.8712 7.15898-3.1049 8.59198-3.7009 4.0915-1.7018 4.9416-1.9974 5.4958-2.0073.1218-.00205.3943.0282.5709.1714.149.1209.19.2843.2097.399.0196.1146.044.3759.0246.58-.2217 2.3296-1.1811 7.983-1.6692 10.5922-.2065 1.1041-.6132 1.4743-1.0069 1.5105-.8555.0787-1.5052-.5654-2.3339-1.1086-1.2967-.85-2.0292-1.3792-3.2879-2.2086-1.4546-.9586-.5116-1.4854.3174-2.3464.2169-.2253 3.9866-3.6541 4.0595-3.9652.0092-.0389.0176-.1839-.0685-.2605-.0862-.0765-.2133-.0503-.3051-.0295-.13.0295-2.2015 1.3987-6.2144 4.1075-.588.4038-1.1206.6005-1.5977.5902-.5261-.0114-1.53798-.2975-2.29022-.542-.92265-.2999-1.65596-.4585-1.5921-.9678.03326-.2653.3986-.5367 1.09604-.814z" />
                </svg>
            </a>
            <a href="" className="border-white border-2 hover:bg-white rounded-full transition duration-200">
                <svg className='fill-white hover:fill-primary' width="32" height="32" viewBox="0 0 167 154" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M93.8804 68.7359L134.465 23H124.851L89.5967 62.7037L61.4602 23H29L71.5572 83.0448L29 131H38.6138L75.8191 89.0626L105.54 131H138M42.0836 30.0285H56.8531L124.844 124.317H110.071" />
                </svg>
            </a>
        </div>
    </div>
</footer>
<Slider />
</>

)}

export default Footer;