import { useState } from 'react';
import React from 'react';

/*
interface NavbarProps {
    text: string;
    onClick?: () => void;
}
*/

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className=' hidden sm:flex justify-center sm:w-full md:w-3/4 mx-auto justify-between text-xl py-10 '>
                <div className=' flex justify-between w-full'>
                    <a href="" className='hover:underline'>Galleri</a>
                    <a href="" className=' hover:underline transition-all'>Vår historie</a>
                </div>
                <a href="" className='w-full text-center hover:underline text-2xl underline'>Hjem</a>
                <div className=' flex justify-between w-full'>
                    <a href="" className='hover:underline'>Ønskeliste</a>
                    <a href="" className='hover:underline'>Innslag</a>
                </div>
            </div>
            <div className="sm:hidden flex justify-between pt-10"> {/* Skjuler menyen på større skjermer */}
                {/* Burger-ikon */}
                <div
                    className="cursor-pointer"
                    onClick={toggleMenu}
                >
                    <div className="w-6 h-1 bg-black mb-1"></div>
                    <div className="w-6 h-1 bg-black mb-1"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </div>
                <div>
                    <p>
                        Maria & Sebastian
                    </p>
                </div>
                {/* Overlay */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        } flex justify-center items-center`}
                    onClick={toggleMenu}
                >
                    <div className="text-white text-3xl font-bold">
                        <ul className="space-y-4">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Navbar;