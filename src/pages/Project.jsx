import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import project1Img from '../assets/obe1.png';
import project2Img from '../assets/upvc1.png';
import project3Img from '../assets/trust1.png';

const techColors = {
    React: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    Node: 'bg-green-100 text-green-800 border-green-200',
    Tailwind: 'bg-blue-100 text-blue-700 border-blue-200',
    MySQL: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    MongoDB: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    JavaScript: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    PHP: 'bg-purple-100 text-purple-800 border-purple-200',
};

const getTechStackBadges = (techs) => (
    <div className="flex flex-wrap gap-2 mt-3">
        {techs.map((tech) => (
            <span
                key={tech}
                className={`text-xs font-bold px-3 py-1 rounded-full border ${techColors[tech] || 'bg-gray-100 text-gray-700 border-gray-200'
                    }`}
            >
                {tech}
            </span>
        ))}
    </div>
);

const projects = [
    {
        title: 'Outcome Based Education',
        description: 'An OBE system implemented for over 8000 students and 510 staff. It manages and calculates CIA students internal marks for 50,000+ records in a centralized database, ensuring the data accuracy and streamlined academic analysis and reports. This live system is currently used at Jamal Mohamed College for real-time OBE mark entry.',
        image: project1Img,
        link: 'https://www.jmc.edu/',
        github: '#',
        techStack: ['React', 'Node', 'MySQL'],
        isLive: true,
    },
    {
        title: 'UPVC Quotation Management',
        description: 'A full-featured quotation system for managing doors windows and louver orders. Supports customer profiles printable quotes report generation and order tracking. The system simplifies the order process and ensures consistent professional customer interaction. This live system is currently used at Champion products company.',
        image: project2Img,
        link: '#',
        github: '#',
        techStack: ['React', 'Tailwind', 'Node', 'MongoDB'],
        isLive: true,
    },
    {
        title: 'AL Muhmin Trust Platform',
        description: 'A secure trust management platform for tracking member contributions and donation distributions. Includes date-wise entry, fund balance monitoring, and personalized member dashboards. An admin panel ensures centralized control of operations and records. This live system is currently used by the Trust Management committee.',
        image: project3Img,
        link: '#',
        github: '#',
        techStack: ['React', 'Node', 'MongoDB'],
        isLive: true,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

function Project() {

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto">

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white text-justify rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                        >
                            {/* Image with Overlay */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                />

                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-md lg:text-lg leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 text-gray-800 font-bold text-xs uppercase tracking-wider mb-2">
                                        <FaCode className="text-blue-600" />
                                        Tech Stack
                                    </div>
                                    {getTechStackBadges(project.techStack)}

                                    {/* Action Buttons */}
                                    {/* <div className="flex gap-3 mt-8">
                                        <a
                                            href={project.link}
                                            className="flex-1 flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition shadow-md"
                                        >
                                            <FaExternalLinkAlt size={12} /> Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            className="flex-1 flex justify-center items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition"
                                        >
                                            <FaGithub size={14} /> Source
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Project;