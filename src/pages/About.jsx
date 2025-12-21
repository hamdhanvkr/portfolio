import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Lightbulb, TrendingUp } from 'lucide-react';
import aboutsImage from '../assets/abt3.jpeg';

const About = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section id="about" className="py-8 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="max-w-7xl mx-auto px-2 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
            >
                <motion.div variants={itemVariants} className="w-full lg:w-2/5 relative">
                    <div className="relative group mx-auto lg:mx-0 w-fit">
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-[3rem] opacity-10 blur-2xl group-hover:opacity-20 transition duration-500"></div>

                        <div className="relative p-1 bg-white rounded-[3rem] shadow-2xl border border-slate-100">
                            <img
                                src={aboutsImage}
                                alt="Mohamed Hamdhan"
                                className="w-72 h-96 lg:w-full lg:h-[550px] object-cover rounded-[2.5rem] grayscale-[20%] hover:grayscale-0 transition duration-700"
                            />
                        </div>
                    </div>
                </motion.div>

                <div className="w-full lg:w-3/5 space-y-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  text-justify">
                        <motion.div variants={itemVariants} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <GraduationCap className="text-blue-600 mb-4" size={28} />
                            <p className="text-slate-600 leading-relaxed">
                                Holds a <strong className="text-slate-900">Master of Computer Applications (MCA)</strong> from Jamal Mohamed College in Trichy.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <Lightbulb className="text-blue-600 mb-4" size={28} />
                            <p className="text-slate-600 leading-relaxed">
                                Follows a <strong className="text-slate-900">user-centric design</strong> approach to ensure intuitive and accessible applications.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <TrendingUp className="text-blue-600 mb-4" size={28} />
                            <p className="text-slate-600 leading-relaxed">
                                Continuously learning and staying <strong className="text-slate-900">up to date</strong> with latest technologies and industry trends.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <Users className="text-blue-600 mb-4" size={28} />
                            <p className="text-slate-600 leading-relaxed">
                                Strong <strong className="text-slate-900">collaborative team player</strong> with experience in building efficient applications.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="space-y-4 pt-4 border-t border-slate-100 text-justify">
                        <div className="flex items-start gap-4">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 shrink-0">
                                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            </div>
                            <p className="text-slate-600 text-md">
                                Driven by a passion for solving real-world problems through{' '}
                                <span className="text-slate-900 font-medium">innovative digital solutions</span>.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 shrink-0">
                                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            </div>
                            <p className="text-slate-600 text-md">
                                Successfully contributed to and completed{' '}
                                <span className="text-slate-900 font-medium">multiple team projects</span> with effective coordination.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;