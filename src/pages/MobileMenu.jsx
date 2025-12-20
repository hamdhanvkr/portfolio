import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5,
            bounce: 0.3,
            staggerChildren: 0.05
        }
    },
    exit: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        transition: { duration: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
};

const MobileMenu = ({ setIsOpen, navItems }) => {

    return (
        <div className="fixed inset-0 z-[100] p-6 flex items-center justify-center">

            {/* Blue-tinted Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-blue-950/10 backdrop-blur-md"
            />

            {/* Floating Menu Card */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-sm bg-white/95 backdrop-blur-2xl border border-blue-100 shadow-[0_20px_50px_rgba(30,58,138,0.2)] rounded-[2.5rem] overflow-hidden"
            >
                {/* Header */}
                <div className="px-8 py-5 flex justify-between items-center border-b border-blue-50">
                    <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-blue-500">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 -mr-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Links Grid */}
                <nav className="p-4 grid grid-cols-1 gap-2">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            variants={itemVariants}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between px-5 py-2 rounded-2xl hover:bg-blue-600 group transition-all duration-300"
                        >
                            <span className="text-slate-700 group-hover:text-white font-semibold text-base transition-colors">
                                {item.name}
                            </span>
                            <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-500/50 transition-colors border border-blue-100 group-hover:border-transparent">
                                <ArrowUpRight className="w-4 h-4 text-blue-600 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                        </motion.a>
                    ))}
                </nav>

                {/* Bottom Contact / Action */}
                <div className="p-4 bg-blue-50/50">
                    <a
                        href="#contact"
                        className="block w-full text-center py-4 rounded-2xl bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
                    >
                        Let's Talk
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default MobileMenu;