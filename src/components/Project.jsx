import React from 'react';
import project1Img from '../assets/obe1.png';
import project2Img from '../assets/upvc1.png';
import project3Img from '../assets/trust1.png';

const projects = [
	{
		title: 'Outcome-Based Education System',
		description:
			'An OBE system implemented for over 8000 students and 510 staff. It manages and calculates CIA students internal marks for 50,000+ records in a centralized database, ensuring the data accuracy and streamlined academic analysis and reports. This live system is currently used at Jamal Mohamed College for real-time OBE mark entry.',
		image: project1Img,
		link: 'https://www.jmc.edu/',
		design:"inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 shadow hover:scale-105"
	},
	{
		title: 'UPVC Quotation Management',
		description:
			'A full-featured quotation system for managing doors windows and louver orders. Supports customer profiles printable quotes report generation and order tracking. The system simplifies the order process and ensures consistent professional customer interaction. This live system is currently used at Champion products company.',
		image: project2Img,
		link: '#',
		design:"inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow hover:scale-105"
	},
	{
		title: 'AL Muhmin Trust Management',
		description:
			'A secure trust management platform for tracking member contributions and donation distributions. Includes date-wise entry, fund balance monitoring, and personalized member dashboards. An admin panel ensures centralized control of operations and records. This live system is currently used by the Trust Management committee.',
		image: project3Img,
		link: '#',
		design:"inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 shadow hover:scale-105"
	},
];

function Project() {
	return (
		<section
			id="projects"
			className="min-h-screen py-16 px-6 lg:px-24"
		>
			<h2 className="text-2xl font-bold text-center mb-12 lg:text-3xl" data-aos="fade-down">
				My Projects
			</h2>

			<div className="grid md:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<div
						key={index}
						className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
						data-aos="fade-up"
						data-aos-delay={index * 200}
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-fill rounded-t-xl"
						/>
						<div className="p-6 flex flex-col justify-between flex-1">
							<div>
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									{project.title}
								</h3>
								<p className="text-gray-600 text-justify">
									{project.description}
								</p>
							</div>
							<div className="mt-6 flex justify-end">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className={project.design}
								>
									View Project
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Project;
