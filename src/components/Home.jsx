import React from 'react';
import myPhoto from '../assets/Me1.jpg';
// import myPhoto from '../assets/my_photo.jpg';
import resumePDF from '../assets/CV.pdf';

function Home() {

	return (
		<section
			id="home"
			className="min-h-screen py-16 px-6 lg:px-32 flex items-center"
		>
			<div
				className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10"
				data-aos="fade-up"
			>
				<div className="lg:w-full text-center lg:text-left">
					<h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
						Hi, I'm <span className="text-blue-600">Mohamed Hamdhan J</span>
					</h2>
					<h3 className="text-xl md:text-2xl text-blue-500 font-semibold mb-5">
						Full Stack Developer
					</h3>
					<p className="text-gray-700 mb-6 leading-relaxed text-justify">
						Passionate Full Stack Developer with expertise in crafting aesthetic, user-centric, and scalable web applications.
						Proficient in modern frontend frameworks, intuitive design, and robust backend systems, I specialize in delivering visually engaging,
						high-performance solutions that blend functionality with exceptional design. Adept at responsive design, seamless user interactions,
						and efficient database management, I am committed to solving complex challenges while staying ahead of the latest trends in
						web development and digital innovation.
					</p>
					<a
						href={resumePDF}
						download="Mohamed_Hamdhan_Resume"
						className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
					>
						Download CV
					</a>
				</div>
				<div className="lg:w-1/2 w-full flex justify-center">
					<div className="relative group">
						<img
							src={myPhoto}
							alt="Mohamed Hamdhan"
							className="w-72 h-72 md:w-80 md:h-96 object-fill shadow-lg border-4 border-blue-300 
                 rounded-xl lg:rounded-full hover:scale-105 transition-transform duration-500"
						/>
						<div className="absolute inset-0 rounded-xl lg:rounded-full border border-white opacity-10 blur-lg"></div>
					</div>
				</div>

			</div>
		</section>
	);
};

export default Home;
