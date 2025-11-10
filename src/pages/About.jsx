import React from 'react';
import { motion } from 'framer-motion';
import aboutsImage from '../assets/abouts.jpeg';

const About = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full flex flex-col lg:flex-row items-center justify-between gap-16"
        >
            {/* Image Section */}
            <motion.div
                variants={itemVariants}
                className="w-full lg:w-1/3 flex justify-center lg:justify-start"
            >
                <div className="relative group p-2 bg-white rounded-3xl shadow-2xl transition duration-500 hover:shadow-blue-300/50">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-700 to-transparent opacity-10 blur-xl group-hover:opacity-30 transition duration-500"></div>
                    <img
                        src={aboutsImage}
                        alt="About Mohamed Hamdhan"
                        className="relative w-72 h-96 lg:w-96 lg:h-[600px] object-cover rounded-3xl border-4 border-white transform group-hover:scale-[1.02] transition duration-500"
                    />
                </div>
            </motion.div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3 space-y-8 text-center lg:text-left">
                <motion.div variants={itemVariants}>
                    <h3 className="text-sm uppercase tracking-[4px] text-blue-600 font-semibold mb-2">
                        Who I Am
                    </h3>
                    <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        A Passionate <span className="text-blue-700">Frontend Developer</span>
                    </h2>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                    I specialize in building modern, responsive, and high-performing web applications. My journey is driven by a commitment to user-centric design and solving real-world problems with innovative digital solutions.
                </motion.p>

                <motion.div variants={itemVariants} className="pt-0">
                    <h4 className="text-xl font-semibold text-gray-800 mb-6">Key Highlights:</h4>
                    <ul className="text-gray-700 leading-loose max-w-2xl mx-auto lg:mx-0 space-y-3">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-3 text-2xl">•</span>
                            <span>
                                Holds a Master of Computer Applications (MCA) from Jamal Mohamed College, providing a robust foundation in software development principles.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-3 text-2xl">•</span>
                            <span>
                                Follows a user-centric design approach to ensure all applications are intuitive, accessible, and deliver a seamless user experience.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-3 text-2xl">•</span>
                            <span>
                                Continuously learning and adapting to the latest frontend technologies and industry best practices for future-ready solutions.
                            </span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-0">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                    >
                        Let's Connect
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About;