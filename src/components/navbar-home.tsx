import React, { useState, useEffect } from 'react';
import '../index.css';
import './navbar.css';


const Navbar_home: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Finner den aktive siden
    const currentPath = window.location.pathname;

    // Funksjon for å sjekke om en lenke er aktiv
    const isActive = (path: string) => currentPath === path;

    // Navigasjonslenker (uten "Hjem")
    const navLinks = [
        { href: "/Galleri", label: "Galleri" },
        { href: "/history", label: "Vår historie" },
        { href: "/Wishlist", label: "Ønskeliste" },
        { href: "/Innslag", label: "Innslag" },
    ];

    // Legg til en scroll event listener for å sjekke om brukeren har scrollet
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 left-0 w-full z-50 links transition-colors duration-300 ${hasScrolled ? 'bg-orange bg-opacity-80 rounded-b-xl font' : 'bg-transparent'
                }`}
        >
            {/* Desktop-menynavigasjon */}
            <div className='hidden sm:flex justify-center sm:w-full md:w-3/4 mx-auto justify-between text-pinkLight font-bold text-xl py-4 '>
                <div className='flex justify-between w-full'>
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
                    className={`w-full text-center link-active links-home hover:drop-shadow-lg text-2xl ${isActive('/') ? 'text-pinkLight' : ''}`}
                >
                    Hjem
                </a>
                <div className='flex justify-between w-full '>
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
            <div className="sm:hidden flex justify-between pt-4">
                {/* Burger-ikon */}
                <div className="cursor-pointer" onClick={toggleMenu}>
                    <div className="w-6 h-1 bg-black mb-1"></div>
                    <div className="w-6 h-1 bg-black mb-1"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </div>
                <div>
                    <p>Maria & Sebastian</p>
                </div>
                {/* Overlay for hamburgermeny */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        } flex justify-center items-center`}
                    onClick={toggleMenu}
                >
                    <div className="text-white text-3xl font-bold">
                        <ul className="space-y-4">
                            <li>
                                <a href="/" className={isActive('/') ? 'underline' : ''}>
                                    Hjem
                                </a>
                            </li>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={isActive(link.href) ? 'underline' : ''}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar_home;