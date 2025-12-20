import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiDjango, SiTypescript } from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React.js", icon: <FaReact />, color: "text-cyan-500", level: "92%" },
            { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600", level: "85%" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400", level: "95%" },
            { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500", level: "90%" },
        ],
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Django", icon: <SiDjango />, color: "text-emerald-700", level: "85%" },
            { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600", level: "75%" },
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600", level: "80%" },
            { name: "MySQL", icon: <SiMysql />, color: "text-blue-500", level: "80%" },
        ],
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Skill() {

    return (
        <section id="skills" className="py-12 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="space-y-12">
                    {skillCategories.map((category, catIdx) => (
                        <div key={catIdx} className="relative">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 block">
                                {category.title}
                            </h3>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center p-4 lg:p-6 bg-slate-50/50 border border-slate-100 rounded-xl hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                                    >
                                        <div className={`text-2xl ${skill.color} mr-4 lg:text-5xl`}>
                                            {skill.icon}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm lg:text-lg font-bold text-slate-700">{skill.name}</span>
                                                <span className="text-[10px] font-mono text-slate-400">{skill.level}</span>
                                            </div>

                                            {/* Micro-Progress Bar */}
                                            <div className="h-1.5 w-full mt-2 bg-slate-200 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: skill.level }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className="h-full bg-blue-600"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;