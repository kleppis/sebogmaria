import React from 'react';

/*
interface NavbarProps {
    text: string;
    onClick?: () => void;
}
*/

const Navbar = () => {
    return (
        <header className=' flex justify-center w-1/2 mx-auto justify-between text-xl py-10 '>
            <div className=' flex justify-between w-full'>
                <a href="" className='hover:scale-110 active:scale-100 transition-all'>Galleri</a>
                <a href="" className='hover:scale-110 active:scale-100 transition-all'>Vår historie</a>
            </div>
            <a href="" className='w-full text-center hover:scale-110 active:scale-100 transition-all text-2xl underline'>Hjem</a>
            <div className=' flex justify-between w-full'>
                <a href="" className='hover:scale-110 active:scale-100 transition-all'>Ønskeliste</a>
                <a href="" className='hover:scale-110 active:scale-100 transition-all'>Innslag</a>
            </div>
        </header>

    );
};

export default Navbar;