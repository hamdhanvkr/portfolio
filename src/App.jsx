import React, { useEffect,useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import 'aos/dist/aos.css';
import AOS from 'aos';
import About from './components/About';
import Skill from './components/Skill'
import Project from './components/Project';
import Contact from './components/Contact';
import Certification from './components/Certification';

function App() {

	useState(() => {
		AOS.init({ duration: 1000 });
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

	return (
		<>
			<Header />
			{/* space-y-24 */}
			<div className="bg-gradient-to-br from-blue-200 via-gray-200 to-blue-300 pt-10">
				<section id="home">
					<Home />
				</section>
				<section id="about">
					<About />
				</section>
				<section id="skills">
					<Skill />
				</section>
				<section id="projects">
					<Project />
				</section>
				<section id="certification">
					<Certification />
				</section>
				<section id="contact">
					<Contact />
				</section>
			</div>
		</>
	);
}

export default App;
