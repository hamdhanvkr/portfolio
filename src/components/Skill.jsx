import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-800" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-700" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
];

function Skill() {
    return (
        <section id="skills"
            className="min-h-screen -mt-20 py-16 px-6 lg:px-24 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-10" data-aos="fade-down">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8" data-aos="fade-up">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <div className="text-5xl mb-3 animate-bounce-once hover:animate-spin-slow">
                            {skill.icon}
                        </div>
                        <p className="text-gray-700 font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skill;
