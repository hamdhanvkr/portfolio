import React, { useEffect, useState } from 'react';
import TopBar from './pages/TopBar';
import Home from './pages/Home';
import { motion } from "framer-motion";
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Certification from './pages/Certification';
import Experience from './pages/Experience';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {

	useEffect(() => {
		AOS.init({ duration: 1000, once: true, offset: 50 });
	}, []);

	useEffect(() => {
		window.history.scrollRestoration = 'manual';
		const saveScrollPosition = () => {
			localStorage.setItem('scrollY', window.scrollY);
		};
		window.addEventListener('beforeunload', saveScrollPosition);
		const scrollY = localStorage.getItem('scrollY');
		if (scrollY) {
			window.scrollTo(0, parseInt(scrollY));
		}
		return () => {
			window.removeEventListener('beforeunload', saveScrollPosition);
		};
	}, []);

	const itemVariants = {
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
		hidden: { opacity: 0, y: 20 },
	};

	return (
		<>
			<TopBar />
			<div className="bg-white text-gray-800 min-h-screen">

				<section id="home" className='py-24 mx-auto px-6 lg:px-20'>
					<Home />
				</section>

				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
						<span className="text-blue-700">About </span>Me
					</h2>
				</motion.div>
				<section id="about" className="py-28 mx-auto px-6 lg:px-20">
					<About />
				</section>

				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
						My<span className="text-blue-700"> Skill</span>
					</h2>
				</motion.div>
				<section id="skills" className="py-10 mx-auto px-6 lg:px-20">
					<Skill />
				</section>

				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
						Featured<span className="text-blue-700"> Projects</span>
					</h2>
				</motion.div>
				<section id="projects" className="py-24 mx-auto px-6 lg:px-20">
					<Project />
				</section>

				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
						My<span className="text-blue-700"> Work Experience</span>
					</h2>
				</motion.div>
				<section id="experience" className="py-24 mx-auto px-6 lg:px-20">
					<Experience />
				</section>

				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
						Certification &<span className="text-blue-700"> Awards</span>
					</h2>
				</motion.div>
				<section id="certification" className="py-24 mx-auto px-6 lg:px-20">
					<Certification />
				</section>

				<motion.div variants={itemVariants}>
					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
						Let's<span className="text-blue-700"> Connect</span>
					</h2>
				</motion.div>
				<section id="contact" className="py-24 mx-auto px-6 lg:px-20">
					<Contact />
				</section>

				<footer className="text-sm bg-white py-6 font-bold lg:text-lg text-center text-gray-600 sm:">
					© {new Date().getFullYear()} Mohamed Hamdhan. All Rights Reserved.
				</footer>

			</div>
		</>
	)
}

export default App;