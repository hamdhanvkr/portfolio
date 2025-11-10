import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import Sql from '../assets/SQL.png';
import Py from '../assets/PY.jpg';
import Oracle from '../assets/ORACLE SQL.png';
import Nsdpy from '../assets/NSD PY.jpeg';
import Threats from '../assets/ADVANCE THREATS.jpeg';

const Certificate = [
    {
        title: "MySQL Proficiency",
        description: "Demonstrated proficiency in MySQL database design, querying, and data manipulation techniques, with hands-on experience in relational database management.",
        image: Sql,
        link: "https://learnzconnect.com/certificates/CERT-2025-6ac6673c-e99e-4dee-84b5-2c1afc75fae2",
    },
    {
        title: "Python for Data Analytics",
        description: "Certified by SA Career Development Centre, with a strong foundation in data analytics using Python. Gained practical experience Pandas, NumPy, and data visualization using Matplotlib.",
        image: Py,
        link: "#"
    },
    {
        title: "Oracle SQL Fundamentals",
        description: "Completed certification from Great Learning in Oracle SQL, covering core concepts such as DDL, DML, joins, subqueries, clauses and performance optimization techniques.",
        image: Oracle,
        link: "https://olympus.mygreatlearning.com/courses/59439/certificate?pb_id=581",
    },
    {
        title: "NSD: Automated Monitoring System",
        description: "Awarded for presenting an Automated Monitoring System with Facial Recognition, showcasing real-time face detection and attendance tracking using AI and computer vision technologies.",
        image: Nsdpy,
        link: "#",
    },
    {
        title: "Advanced Cyber Threats",
        description: "Recognized for gaining practical knowledge in identifying, analyzing, and mitigating cyber threats and vulnerabilities, including malware analysis, risk assessment, and secure system practices.",
        image: Threats,
        link: "#",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    },
};

function Certification() {
    return (
        <section
            id="certification"
            className="min-h-screen bg-white text-gray-900"
        >
            <div className="mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-sm uppercase tracking-[4px] text-blue-600 font-semibold mb-2">
                        Proof of Competence
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Verification of specialized knowledge across key development and security domains.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {Certificate.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white rounded-2xl p-0 shadow-xl border border-gray-100 transition-all duration-500 ease-out hover:shadow-2xl hover:translate-y-[-4px] hover:border-blue-300 flex flex-col overflow-hidden"
                        >
                            <div className="relative w-full h-48 overflow-hidden border-b border-gray-100">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                />
                                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                            </div>

                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-100 pb-2 flex items-center gap-2">
                                        <FaAward className="text-blue-600" /> {cert.title}
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed mb-4 text-justify">
                                        {cert.description}
                                    </p>
                                </div>
                                {cert.link && (
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-start">
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 text-sm"
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            View Certificate
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Certification