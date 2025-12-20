import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const TopBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certification', href: '#certification' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'py-3 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
                    : 'py-5 bg-transparent'
                    }`}
                role="banner"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo Section */}
                    <a
                        href="#home"
                        className="group flex items-center gap-1 text-xl font-extrabold tracking-tight text-slate-900"
                    >
                        <span className="bg-blue-600 text-white px-2 py-0.5 mr-1 lg:mr-2 rounded-md transition-transform duration-300 group-hover:-rotate-3">H</span>
                        <span className="hidden sm:block">Hamdhan</span>
                        <span className="text-blue-600 font-bold ml-0.5">Portfolio</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-sm" aria-label="Primary Navigation">
                        {navItems.map((item) => (
                            <a
                                href={item.href}
                                key={item.name}
                                className="px-5 py-2 text-md font-semibold text-gray-600 hover:text-blue-600 rounded-full transition-all duration-300 hover:bg-white hover:shadow-sm"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA / Contact Button */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="hidden md:block px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-slate-200"
                        >
                            Hire Me
                        </a>

                        {/* Mobile Menu Trigger */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="p-2.5 rounded-xl bg-gray-100 text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-95"
                                aria-label="Open main menu"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {isOpen && <MobileMenu setIsOpen={setIsOpen} navItems={navItems} />}
        </>
    );
};

export default TopBar;