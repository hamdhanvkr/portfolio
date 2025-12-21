import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import myPhoto from "../assets/HOMEZ1.jpeg";
import resumePDF from "../assets/CV.pdf";

const Home = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-2 lg:px-12 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-12 lg:py-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-3/5 space-y-8 text-center lg:text-left z-10"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900">
                            Hi, I’m{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Mohamed Hamdhan J
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 flex items-center justify-center lg:justify-start gap-3">
                            Web Developer
                        </h2>
                    </div>

                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <p className="text-md text-slate-600 leading-relaxed text-justify lg:text-justify mb-6">
                            Passionate Developer skilled in building{" "}
                            <span className="text-slate-900 font-medium">
                                clean, responsive, and scalable
                            </span>{" "}
                            web applications. Proficient in modern technologies like{" "}
                            <span className="text-blue-600 font-medium">
                                React.js, Python Django, and Tailwind CSS
                            </span>
                            . I specialize in creating intuitive user interfaces and
                            customizing frontend templates to deliver high-quality
                            client solutions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={resumePDF}
                            download="Mohamed_Hamdhan_Resume"
                            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:bg-blue-600 flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <Download size={18} />
                            Download CV
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 hover:border-blue-200 flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-2/5 flex justify-center lg:justify-end"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition duration-500"></div>

                        <div className="relative">
                            <img
                                src={myPhoto}
                                alt="Mohamed Hamdhan"
                                className="w-72 h-96 md:w-80 md:h-[450px] object-cover rounded-[2rem] shadow-2xl border-4 border-white group-hover:scale-[1.02] transition duration-500"
                            />

                            {/* <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 hidden sm:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <Github size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                                            Check my
                                        </p>
                                        <p className="text-sm font-extrabold text-slate-900">
                                            Code Portfolio
                                        </p>
                                    </div>
                                </div>
                            </motion.div> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
