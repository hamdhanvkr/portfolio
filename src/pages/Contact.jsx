import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

const contactDetails = [
	{
		icon: <FaLinkedin className="text-blue-600 text-2xl" />,
		label: 'LinkedIn',
		value: 'linkedin.com/in/mohamedhamdhan/',
		link: 'https://www.linkedin.com/in/mohamedhamdhan/',
	},
	{
		icon: <FaGithub className="text-gray-700 text-2xl" />,
		label: 'GitHub',
		value: 'github.com/hamdhanvkr',
		link: 'https://github.com/hamdhanvkr',
	},
	{
		icon: <FaEnvelope className="text-red-500 text-2xl" />,
		label: 'Email',
		value: 'hamdhanvkr@gmail.com',
		link: 'mailto:hamdhanvkr@gmail.com',
	},
	{
		icon: <FaPhoneAlt className="text-green-600 text-2xl" />,
		label: 'Phone',
		value: '+91 9629601141',
		link: 'tel:+919629601141',
	},
	{
		icon: <FaMapMarkerAlt className="text-purple-600 text-2xl" />,
		label: 'Location',
		value: 'Tiruchirappalli, Tamil Nadu, India',
		link: '#',
	},
];

const sectionVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' },
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

function Contact() {
	return (
		<section id="contact" className="min-h-screen relative">
			<div>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					{/* <h3 className="text-sm uppercase tracking-[4px] text-blue-600 font-semibold mb-2">
						Get In Touch
					</h3>
					<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
						Whether you have a project in mind, a question, or just want to say hi, I'd love to hear from you.
					</p> */}
				</motion.div>

				<div className="lg:grid lg:grid-cols-1 gap-10">
					{/* <motion.div
						variants={sectionVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 mb-10 lg:mb-0"
					>
						<h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
							<FaComments className="text-blue-600" /> Send a Message
						</h3>
						<form className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="John Doe"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="john.doe@example.com"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
								/>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="5"
									placeholder="Tell me about your project or inquiry..."
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 lg:text-lg"
							>
								Send Message
							</button>
						</form>
					</motion.div> */}

					<motion.div
						variants={sectionVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 flex flex-col justify-between"
					>
						<h3 className="text-2xl font-bold text-gray-900 mb-6 flex justify-center gap-3">
							<FaPhoneAlt className="text-blue-600" /> Reach Out Directly
						</h3>
						<div className="space-y-6">
							{contactDetails.map((item, index) => (
								<motion.a
									key={index}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									variants={itemVariants}
									className="flex items-center gap-5 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition duration-300 group"
								>
									<div className="shrink-0 p-3 bg-white rounded-full shadow-inner group-hover:bg-blue-100 transition duration-300">
										{item.icon}
									</div>
									<div className="min-w-0">
										<p className="text-base font-semibold text-gray-800 group-hover:text-blue-700 transition duration-300">
											{item.label}
										</p>
										<p className="text-gray-600 text-sm break-words">{item.value}</p>
									</div>
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-40 text-center"
				>
					<div className="inline-block border-2 border-blue-400 bg-white px-8 py-5 rounded-2xl shadow-xl max-w-2xl mx-auto">
						<p className="text-xl italic text-gray-700 font-semibold">
							SELECT * FROM success WHERE motivation = 'High';
						</p>
						<p className="mt-3 text-lg text-end text-gray-500 font-medium">
							Passion drives progress
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Contact;