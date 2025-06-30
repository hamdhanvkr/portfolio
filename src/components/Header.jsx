import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileSidebar from './MobileSidebar';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menus = ['Home', 'About', 'Skills', 'Projects', 'Certification', 'Contact'];

	return (
		<>
			{/* <header className="w-full bg-gradient-to-br from-indigo-800 via-sky-500 to-cyan-400 shadow-md fixed top-0 left-0 z-50"> */}

				<header className="w-full bg-gradient-to-br from-blue-300 via-gray-100 to-blue-300 shadow-md fixed top-0 left-0 z-50">
					<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
						<div className="text-xl font-bold text-blue-600">Welcome to my portfolio</div>

						{/* Desktop Nav */}
						<nav className="hidden lg:flex gap-8">
							{menus.map((item) => (
								<a
									href={`#${item.toLowerCase()}`}
									key={item}
									className="text-gray-700 hover:text-blue-500 transition duration-300 font-medium"
								>
									{item}
								</a>
							))}
						</nav>

						{/* Mobile Hamburger */}
						<div className="lg:hidden">
							<button onClick={() => setIsOpen(true)}>
								<Menu className="w-6 h-6 text-gray-700" />
							</button>
						</div>
					</div>
				</header>

				{/* Sidebar for Mobile */}
				{isOpen && <MobileSidebar setIsOpen={setIsOpen} menus={menus} />}
			</>
			);
};

			export default Header;
