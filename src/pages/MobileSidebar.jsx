import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: {
        x: '0%',
        transition: {
            type: 'tween',
            duration: 0.3,
            ease: 'easeOut'
        }
    },
    exit: { x: '-100%', transition: { duration: 0.3 } },
};

const MobileSidebar = ({ setIsOpen, navItems }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <motion.div
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-64 h-full bg-white p-6 shadow-2xl absolute top-0 left-0"
            >
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <h2 className="text-2xl font-extrabold text-blue-700 uppercase tracking-widest">
                        Menu
                    </h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-full text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition duration-300 border border-transparent hover:border-blue-100"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <a
                            href={item.href}
                            key={item.name}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-blue-700 transition duration-300 font-semibold text-md py-2 px-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </motion.div>
        </div>
    );
};

export default MobileSidebar;