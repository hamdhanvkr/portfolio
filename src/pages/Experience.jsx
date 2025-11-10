import React from 'react';
import { motion } from 'framer-motion';
import Intern from '../assets/intern.png';
import { FaCalendarAlt, FaCode } from 'react-icons/fa';

const experiance = [
	{
		title: 'Fabs ERP',
		company: 'Fabs Infotech, Dubai',
		duration: 'Jan 2022 - Jun 2022 (6 Months)',
		technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript'],
		description:
			'During my internship, I contributed to the development of an ERP system using Python, Django, and PostgreSQL. I focused on customizing templates, enhancing existing modules, and improving performance based on client requirements. This experience significantly strengthened my full-stack development skills and understanding of enterprise-level systems.',
		image: Intern,
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
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: 'easeOut' },
	},
};

const getTechStackBadges = (techs) => (
	<div className="flex flex-wrap gap-2 mt-3">
		{techs.map((tech, i) => (
			<span
				key={i}
				className={`text-sm font-semibold px-3 py-1 rounded-full 
          		${tech === 'Python'
						? 'bg-yellow-100 text-yellow-800'
						: tech === 'Django'
							? 'bg-green-100 text-green-800'
							: tech === 'PostgreSQL'
								? 'bg-indigo-100 text-indigo-700'
								: 'bg-gray-200 text-gray-700'
					}`}
			>
				{tech}
			</span>
		))}
	</div>
);

function Experiance() {

	return (
		<section
			id="experience"
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
						Professional Journey
					</h3>
					<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
						Key roles and internships that shaped my technical skills and professional approach.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 justify-center mx-auto"
				>
					{experiance.map((exp, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="group bg-white rounded-2xl p-0 shadow-xl border border-gray-100 transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.03] hover:border-blue-300 flex flex-col"
						>
							<div className="relative w-full">
								<img
									src={exp.image}
									alt={exp.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition duration-300"></div>
							</div>

							<div className="p-6 w-full flex flex-col justify-between flex-1">
								<div>
									<h2 className="text-2xl font-bold text-gray-900 mb-4">{exp.title}</h2>
									<p className="text-lg font-semibold text-blue-700 mb-4">{exp.company}</p>
									<div className="flex items-center text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
										<FaCalendarAlt className="text-blue-600 mr-2" />
										{exp.duration}
									</div>
									<p className="text-gray-600 text-base leading-relaxed mb-4 text-justify">{exp.description}</p>
									<div className="mt-4 pt-4 border-t border-gray-100">
										<p className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
											<FaCode className="text-blue-600" /> Key Technologies : 
										</p>
										{getTechStackBadges(exp.technologies)}
									</div>
								</div>

								{exp.link && (
									<div className="mt-6 flex justify-end">
										<a
											href={exp.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-sm"
										>
											View Details
										</a>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

export default Experiance;
