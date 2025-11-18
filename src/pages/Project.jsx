import React from 'react';
import { motion } from 'framer-motion';
import project1Img from '../assets/obe1.png';
import project2Img from '../assets/upvc1.png';
import project3Img from '../assets/trust1.png';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'; 

const getTechStackBadges = (techs) => (
	<div className="flex flex-wrap gap-2 mt-3">
		{techs.map((tech, i) => (
			<span key={i} className={`text-sm mt-1 font-semibold px-3 py-1 rounded-full 
                ${tech === 'React' ? 'bg-cyan-100 text-cyan-800' :
					tech === 'Node' ? 'bg-green-100 text-green-800' :
						tech === 'Tailwind' ? 'bg-blue-100 text-blue-700' :
							tech === 'MySQL' ? 'bg-indigo-100 text-indigo-700' :
								'bg-gray-200 text-gray-700'} 
                `}>
				{tech}
			</span>
		))}
	</div>
);

const projects = [
	{
		title: 'Outcome Based Education',
		description:
			'An OBE system implemented for over 8000 students and 510 staff. It manages and calculates CIA students internal marks for 50,000+ records in a centralized database, ensuring the data accuracy and streamlined academic analysis and reports. This live system is currently used at Jamal Mohamed College for real-time OBE mark entry.',
		image: project1Img,
		link: 'https://www.jmc.edu/',
		github: '#',
		techStack: ['React', 'Node', 'Express', 'MySQL'],
	},
	{
		title: 'UPVC Quotation Management',
		description:
			'A full-featured quotation system for managing doors windows and louver orders. Supports customer profiles printable quotes report generation and order tracking. The system simplifies the order process and ensures consistent professional customer interaction. This live system is currently used at Champion products company.',
		image: project2Img,
		link: '#',
		github: '#',
		techStack: ['React','Tailwind CSS', 'Node', 'MongoDB'],
	},
	{
		title: 'AL Muhmin Trust Management',
		description:
			'A secure trust management platform for tracking member contributions and donation distributions. Includes date-wise entry, fund balance monitoring, and personalized member dashboards. An admin panel ensures centralized control of operations and records. This live system is currently used by the Trust Management committee.',
		image: project3Img,
		link: '#',
		github: '#',
		techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
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


function Project() {

	return (
		<section
			id="projects"
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
					{/* <h3 className="text-sm uppercase tracking-[4px] text-blue-600 font-semibold mb-2">
						My Portfolio
					</h3>
					<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
						High-impact, real-world solutions developed using modern frontend technologies.
					</p> */}
				</motion.div>


				{/* Projects Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid md:grid-cols-2 lg:grid-cols-2 
					gap-10"
				>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="group bg-white rounded-xl p-0 
                                shadow-xl border border-gray-100 
                                transition-all duration-500 ease-out 
                                hover:shadow-2xl hover:scale-[1.01] hover:border-blue-300 
                                flex flex-col overflow-hidden"
						>
							{/* Image Container */}
							<div className="relative w-full h-48 lg:h-66 overflow-hidden border-b border-gray-100">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full transition-transform duration-500 group-hover:scale-[1.05]"
								/>
								<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition duration-300"></div>
							</div>

							<div className="p-6 flex flex-col justify-between flex-1">
								<div>
									<h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-3 border-b-2 border-blue-100 pb-2">
										{project.title}
									</h3>
									<p className="text-gray-600 text-base leading-relaxed text-justify mb-4">
										{project.description}
									</p>
									<div className="mb-6 pt-4 border-t border-gray-100">
										<p className="text-md font-bold text-gray-800 mb-2 flex items-center gap-2">
											<FaCode className="text-blue-600" /> Tech Stack :
										</p>
										{getTechStackBadges(project.techStack)}
									</div>

								</div>

								{/* Dual Action Buttons - Matches Home's primary/secondary button style */}
								<div className="flex gap-4 justify-start pt-6 border-t border-gray-100">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex w-38 justify-center items-center gap-2 bg-blue-600 text-white px-5 py-2 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-sm"
									>
										<FaExternalLinkAlt className="text-xs" />
										View Project
									</a>
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex w-35 justify-center items-center gap-2 border-2 border-blue-600 text-blue-700 px-5 py-2 font-semibold rounded-lg hover:bg-blue-50 transition duration-300 text-sm"
									>
										<FaGithub className="text-xs" />
										GitHub
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Conclusion Line */}
				{/* <p className="mt-20 text-center text-lg text-gray-600 font-medium">
					Ready to collaborate? <a href="#contact" className="text-blue-600 font-semibold underline hover:text-blue-800 transition duration-300">Get in touch.</a>
				</p> */}

			</div>
		</section>
	);
}

export default Project;