import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGithub,FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMysql ,SiPostgresql} from 'react-icons/si';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: 'Advanced' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: 'Advanced' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" />, level: 'Expert' },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 'Advanced' },
    { name: 'React.js', icon: <FaReact className="text-cyan-500" />, level: 'Expert' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 'Intermediate' },
    { 
        name: 'Python Django', 
        icon: <FaPython className="text-green-700" />,
        level: 'Advanced' 
    },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" />, level: 'Intermediate' },
    { name: 'SQL', icon: <SiMysql className="text-indigo-600" />, level: 'Intermediate' },
    { name: 'GitHub/Git', icon: <FaGithub className="text-gray-700" />, level: 'Advanced' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 12,
        }
    },
};

function Skill() {
    return (
        <section id="skills" className="text-gray-800 min-h-screen flex flex-col items-center justify-center" >
            <div className="mx-auto w-full">

                {/* Section Header - Gradient Accent */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                   
                    <p className="text-lg text-gray-600 mx-auto">
                        A curated list of technologies I use to develop and deliver robust applications.
                    </p>
                </motion.div>

                {/* Skills Grid - Neumorphic/Soft-UI Design */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    // Adjusted grid for a less formal spread
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            // Soft UI / Neumorphic inspired styling
                            className="flex flex-col items-center p-4 py-8 lg:p-8 bg-white rounded-[1rem] 
                                shadow-xl 
                                transform transition-all duration-300 
                                hover:shadow-2xl hover:scale-[1.05]
                                border border-white 
                                relative overflow-hidden"
                        >
                            {/* Accent Circle for Icon */}
                            <div className="absolute top-0 right-0 w-10 h-10 lg:w-20 lg:h-20 rounded-bl-[6rem] bg-indigo-100 opacity-30"></div>

                            {/* Icon - Prominently displayed */}
                            <div className="text-5xl lg:text-7xl p-4 rounded-full bg-white 
                                shadow-inner-xl transform transition duration-500 z-10">
                                {skill.icon}
                            </div>

                            {/* Skill Name */}
                            <p className="text-md lg:text-xl font-bold text-gray-900 mb-5">{skill.name}</p>

                           
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default Skill;