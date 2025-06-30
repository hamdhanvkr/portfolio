import React from 'react'
import Photos from '../assets/Me.jpeg'

function About() {
    return (
        <section id="about"
            className="min-h-screen py-16 px-6 lg:px-32 flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10" data-aos="fade-up">
                <div className="flex flex-col lg:flex-row w-full items-center gap-16">
                    <img
                        src={Photos}
                        alt="About me"
                        className="w-80 h-96 rounded-full object-cover shadow-lg"
                    />
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-700 leading-relaxed text-justify max-w-4xl">
                            I am a passionate Full Stack Developer with a strong foundation in both frontend and backend development, dedicated to crafting dynamic and scalable web applications. I hold a Master of Computer Applications (MCA) degree from Jamal Mohamed College, which has equipped me with in-depth knowledge of software development principles and emerging technologies.
                            <br /><br />
                            With hands-on experience in building responsive, high-performance websites, I specialize in API development, database management, and creating seamless user experiences. My development approach focuses on writing clean, maintainable code with an emphasis on security, performance optimization, and user-centric design.
                            <br /><br />
                            I constantly stay updated with the latest industry trends and technologies to deliver efficient, robust, and future-ready solutions. Passionate about problem-solving and digital innovation, I strive to create impactful and user-friendly digital experiences that drive value and growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About