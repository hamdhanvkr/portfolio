import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTerminal } from 'react-icons/fa';

const contactDetails = [
    {
        icon: <FaLinkedin />,
        label: 'LinkedIn',
        value: 'linkedin.com/in/mohamedhamdhan/',
        link: 'https://www.linkedin.com/in/mohamedhamdhan/',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        icon: <FaGithub />,
        label: 'GitHub',
        value: 'github.com/hamdhanvkr',
        link: 'https://github.com/hamdhanvkr',
        color: 'text-gray-900',
        bg: 'bg-gray-100'
    },
    {
        icon: <FaEnvelope />,
        label: 'Email',
        value: 'hamdhanvkr@gmail.com',
        link: 'mailto:hamdhanvkr@gmail.com',
        color: 'text-red-500',
        bg: 'bg-red-50'
    },
    {
        icon: <FaPhoneAlt />,
        label: 'Phone',
        value: '+91 9629601141',
        link: 'tel:+919629601141',
        color: 'text-green-600',
        bg: 'bg-green-50'
    },
    {
        icon: <FaMapMarkerAlt />,
        label: 'Location',
        value: 'Tiruchirappalli, Tamil Nadu, India',
        link: '#',
        color: 'text-purple-600',
        bg: 'bg-purple-50'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

function Contact() {

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Contact Card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-blue-900/5 p-4 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactDetails.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                className="flex items-center gap-5 p-5 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300 group"
                            >
                                <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${item.bg} ${item.color} text-xl shadow-sm group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-gray-900 font-semibold truncate group-hover:text-blue-700 transition-colors">
                                        {item.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* SQL Quote / Motivation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-48 max-w-2xl mx-auto"
                >
                    <div className="relative group">
                        <div className="relative bg-gray-900 rounded-2xl p-8">
                            {/* Terminal Header */}
                            <div className="flex gap-1.5 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <FaTerminal className="ml-auto text-gray-600" />
                            </div>

                            <div className="space-y-4 relative">
                                <p className="font-mono text-md md:text-xl text-blue-400">
                                    <span className="text-purple-400">SELECT</span> *{" "}
                                    <span className="text-purple-400">FROM</span> success
                                    <br />
                                    <span className="text-purple-400">WHERE</span> motivation ={" "}
                                    <span className="text-green-400">'High'</span>;
                                </p>

                                <div className="border-t border-gray-800 h-10 relative">
                                    <span className="absolute bottom-0 right-0 text-gray-300 italic font-medium">
                                        Passion drives progress
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;