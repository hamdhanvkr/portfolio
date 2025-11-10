import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileSidebar from './MobileSidebar';

const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

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
				className="w-full bg-white shadow-lg fixed top-0 left-0 z-50 transition-all duration-300 border-b border-gray-100"
				role="banner"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
					<a href="#home" aria-label="Go to Home" className="text-2xl font-bold tracking-tight text-gray-900 transition duration-300 hover:text-blue-600">
						Hamdhan <span className="text-blue-600">Portfolio</span>
					</a>

					<nav className="hidden lg:flex gap-8" aria-label="Primary Navigation">
						{navItems.map((item) => (
							<a
								href={item.href}
								key={item.name}
								className="text-lg font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition duration-300 relative group py-1"
							>
								{item.name}
								<span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
							</a>
						))}
					</nav>

					<div className="lg:hidden">
						<button
							onClick={() => setIsOpen(true)}
							aria-label="Open main menu"
							aria-expanded={isOpen}
							className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition duration-150"
						>
							<Menu className="w-6 h-6" />
						</button>
					</div>
				</div>
			</header>

			{isOpen && <MobileSidebar setIsOpen={setIsOpen} navItems={navItems} />}
		</>
	);
};

export default Header;