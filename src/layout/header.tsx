import React, { useState } from 'react';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

return (
<nav className="sticky top-0 z-50 border-b-2 border-[#0064962c] navbar" data-aos="fade-up">
    <div className="max-w-[75rem] mx-auto py-2 px-4 sm:px-4 lg:px-4 xl:px-0">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <a href='#hero'>
                        <img src={""} width={40} height={40} alt='Logo' className='hover:scale-110 transition duration-200' />
                    </a>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <a href="#about"
                            className="text-primary hover:bg-primary hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-semibold">
                            About
                        </a>
                        <a href="#projects"
                            className="text-primary hover:bg-primary hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-semibold">
                            Projects
                        </a>
                        <a href="#contact"
                            className="text-primary hover:bg-primary hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-semibold">
                            Contact
                        </a>
                        <a href="mailto:izzetgunturk2@hotmail.com"
                            className="border-[2px] border-primary text-primary hover:bg-primary hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-semibold">
                            Mail me!
                        </a>
                    </div>
                </div>
            </div>
            <div className="-mr-2 flex md:hidden">
                <button
                    className="fixed top-0 right-0 z-20 flex items-center justify-center w-20 h-20 mb-safe"
                    onClick={toggleNav} aria-expanded={isNavOpen} aria-label={isNavOpen ? 'Close navigation'
                    : 'Open navigation' } aria-hidden="true">
                    <div className="absolute block w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-primary transform transition
                            duration-200 ease-in-out ${ isNavOpen ? 'rotate-45' : '-translate-y-2' }`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-primary transform transition
                            duration-200 ease-in-out ${ isNavOpen ? 'opacity-0' : '' }`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-primary transform transition
                            duration-200 ease-in-out ${ isNavOpen ? '-rotate-45' : 'translate-y-2' }`}></span>
                    </div>
                </button>
            </div>
        </div>
    </div>

    <div className={`${isNavOpen ? 'block' : 'hidden' } md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
            <a href="#about"
                className="block text-primary hover:bg-primary hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-semibold">
                    About
            </a>
            <a href="#projects"
                className="block text-primary hover:bg-primary hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-semibold">
                    Projects
            </a>
            <a href="#contact"
                className="block text-primary hover:bg-primary hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-semibold">
                    Contact
            </a>
            <a href="mailto:izzetgunturk2@hotmail.com"
                className="block text-primary hover:bg-primary hover:text-white transition duration-200 px-3 py-2 rounded-md text-base font-semibold">
                    Mail me!
            </a>
        </div>
    </div>
</nav>

)}

export default Header;