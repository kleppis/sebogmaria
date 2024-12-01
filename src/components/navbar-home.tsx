import React, { useState, useEffect } from 'react';
import '../index.css';
import './navbar.css';

const Navbar_home: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const currentPath = window.location.pathname;

    const isActive = (path: string) => currentPath === path;

    const navLinks = [
        { href: "/Galleri", label: "Galleri" },
        { href: "/history", label: "Vår historie" },
        { href: "/Wishlist", label: "Ønskeliste" },
        { href: "/Innslag", label: "Innslag" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Overlay for hamburgermeny */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 bg-black h-[100vh] w-[100vw] bg-opacity-80 z-50 flex justify-center items-center"
                    onClick={toggleMenu}
                >
                    <div className="text-white text-3xl font-bold">
                        <ul className="space-y-4">
                            <li>
                                <a href="/" className={isActive('/') ? 'text-pinkDark' : ''}>
                                    Hjem
                                </a>
                            </li>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={isActive(link.href) ? 'text-pinkDark' : ''}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Header */}
            <header
                className={`sticky top-0 left-0 w-full z-40 links pb-3 px-3 md:px-0 md:pb-0 transition-colors duration-300 ${hasScrolled
                    ? 'bg-orange-700 bg-opacity-80 sm:rounded-b-xl font'
                    : 'bg-transparent'
                    }`}
            >
                {/* Desktop-menynavigasjon */}
                <div className="hidden md:flex sm:w-full md:w-3/4 mx-auto justify-between text-pinkLight font-bold text-xl py-4 ">
                    <div className="flex justify-between w-full">
                        {navLinks.slice(0, 2).map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`links-home ${isActive(link.href) ? 'text-pinkLight' : ''}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <a
                        href="/"
                        className={`w-full text-center link-active links-home hover:drop-shadow-lg text-2xl ${isActive('/') ? 'text-pinkLight' : ''
                            }`}
                    >
                        Hjem
                    </a>
                    <div className="flex justify-between w-full ">
                        {navLinks.slice(2).map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`links-home ${isActive(link.href) ? 'text-pinkLight' : ''}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile-menynavigasjon (hamburgermeny) */}
                <div className="md:hidden flex justify-between pt-4">
                    {/* Burger-ikon */}
                    <div className="cursor-pointer" onClick={toggleMenu}>
                        <div className="w-6 h-1 bg-black mb-1"></div>
                        <div className="w-6 h-1 bg-black mb-1"></div>
                        <div className="w-6 h-1 bg-black"></div>
                    </div>
                    <div>
                        <p>Maria & Sebastian</p>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar_home;