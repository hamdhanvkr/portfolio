import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import Sql from '../assets/SQL.png';
import Py from '../assets/PY.jpg';
import Oracle from '../assets/ORACLE SQL.png';
import Nsdpy from '../assets/NSD PY.jpeg';
import Threats from '../assets/ADVANCE THREATS.jpeg';

const certificates = [
    {
        title: "MySQL",
        issuer: "LearnZConnect",
        description: "Demonstrated proficiency in MySQL database design, querying, and data manipulation techniques, with hands-on experience in relational database management.",
        image: Sql,
        link: "https://learnzconnect.com/certificates/CERT-2025-6ac6673c-e99e-4dee-84b5-2c1afc75fae2",
    },
    {
        title: "Python for Data Science",
        issuer: "SA Career Development",
        description: "Certified by SA Career Development Centre, with a strong foundation in data analytics using Python. Gained practical experience Pandas, NumPy, and data visualization using Matplotlib.",
        image: Py,
        link: "",
    },
    {
        title: "Oracle SQL Fundamentals",
        issuer: "Great Learning",
        description: "Completed certification from Great Learning in Oracle SQL, covering core concepts such as DDL, DML, joins, subqueries, clauses and performance optimization techniques.",
        image: Oracle,
        link: "https://olympus.mygreatlearning.com/courses/59439/certificate?pb_id=581",
    },
    {
        title: "Automated Monitoring",
        issuer: "Academic Recognition",
        description: "Awarded for presenting an Automated Monitoring System with Facial Recognition, showcasing real-time face detection and attendance tracking using AI and computer vision technologies.",
        image: Nsdpy,
        link: "",
    },
    {
        title: "Advanced Cyber Threats",
        issuer: "Cybersecurity Domain",
        description: "Recognized for gaining practical knowledge in identifying, analyzing, and mitigating cyber threats and vulnerabilities, including malware analysis, risk assessment, and secure system practices.",
        image: Threats,
        link: "",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
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

function Certification() {

    return (
        <section id="certification" className="py-24 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-2 lg:px-8">

                {/* Certificates Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 flex flex-col h-full overflow-hidden"
                        >
                            {/* Certificate Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-fit transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
                            </div>

                            {/* Details Container */}
                            <div className="p-7 flex flex-col flex-grow text-justify">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[2px] mb-3">
                                        <FaCheckCircle /> {cert.issuer}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-600 text-md leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>

                                {/* Footer: Verification Link */}
                                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                                    {/* {cert.link ? (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                                        >
                                            <FaExternalLinkAlt size={10} /> Verify Credential
                                        </a>
                                    ) : (
                                        <div className="inline-flex items-center gap-2 text-gray-400 text-xs font-semibold">
                                            <FaFileAlt size={12} /> Certificate on Request
                                        </div>
                                    )} */}
                                    <FaAward className="text-blue-600 group-hover:text-gray-200 transition-colors duration-500 text-xl" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Certification;