import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/Me1.jpg";
import resumePDF from "../assets/CV.pdf";

const Home = () => {

	return (
		<div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 min-h-screen">

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
			>
				<h3 className="text-sm uppercase tracking-[4px] text-blue-600 font-semibold">
					Welcome to My Portfolio
				</h3>

				<h1 className="text-5xl md:text-5xl font-extrabold leading-tight text-gray-900">
					Hi, I’m <span className="text-blue-700">Mohamed Hamdhan J</span>
				</h1>

				<h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
					Frontend Web Developer
				</h2>

				<p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
					I specialize in crafting modern, responsive, and high-performing web
					applications using <strong>React.js</strong> and{" "}
					<strong>Tailwind CSS</strong>. My focus is on clean code,
					scalability, and delivering seamless user experiences.
				</p>

				<div className="flex sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
					<a
						href={resumePDF}
						download="Mohamed_Hamdhan_Resume"
						className="px-6 lg:px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
					>
						Download CV
					</a>
					<a
						href="#projects"
						className="px-6 lg:px-8 py-3 border-2 border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300"
					>
						View Projects
					</a>
				</div>

				{/* Skills Summary */}
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700 pt-10">
					<div className="bg-white rounded-lg shadow p-3 text-center hover:shadow-md transition">
						<p className="font-semibold text-blue-600">React.js</p>
						<p className="text-gray-500">Frontend</p>
					</div>
					<div className="bg-white rounded-lg shadow p-3 text-center hover:shadow-md transition">
						<p className="font-semibold text-blue-600">Tailwind CSS</p>
						<p className="text-gray-500">UI Design</p>
					</div>
					<div className="bg-white rounded-lg shadow p-3 text-center hover:shadow-md transition">
						<p className="font-semibold text-blue-600">JavaScript</p>
						<p className="text-gray-500">Logic & API</p>
					</div>
					<div className="bg-white rounded-lg shadow p-3 text-center hover:shadow-md transition">
						<p className="font-semibold text-blue-600">Node.js</p>
						<p className="text-gray-500">Express</p>
					</div>
				</div>
			</motion.div>
 
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.7 }}
				className="w-full lg:w-1/2 flex justify-center lg:justify-end h-full"
			>
				<div className="relative group mt-5 lg:mt-0">
					<div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-800 to-transparent opacity-40 lg:opacity-70 blur-md lg:blur-lg group-hover:opacity-100 transition duration-500"></div>
					<img
						src={myPhoto}
						alt="Mohamed Hamdhan"
						className="relative w-72 h-96 md:w-96 md:h-full object-cover rounded-2xl lg:shadow-xl border border-gray-200 group-hover:scale-105 transition duration-500"
					/>
					<div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold text-blue-700 border border-blue-100">
						Available for Work
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Home;