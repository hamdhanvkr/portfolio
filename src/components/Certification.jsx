import React from 'react'
import Sql from '../assets/SQL.png'
import Py from '../assets/PY.jpg'
import Oracle from '../assets/ORACLE SQL.png'
import Nsdpy from '../assets/NSD PY.jpeg'
import Threats from '../assets/ADVANCE THREATS.jpeg'

const Certificate = [
    {
        title: "MySQL",
        description: "Demonstrated proficiency in MySQL database design, querying, and data manipulation techniques, with hands-on experience in relational database management.",
        image: Sql,
        // link: "https://learnzconnect.com/certificates/CERT-2025-6ac6673c-e99e-4dee-84b5-2c1afc75fae2",
    },
    {
        title: "Python",
        description: "Certified by SA Career Development Centre, with a strong foundation in data analytics using Python. Gained practical experience Pandas, NumPy, and data visualization using Matplotlib.",
        image: Py,
        // link: ""
    },
    {
        title: "Oracle SQL",
        description: "Completed certification from Great Learning in Oracle SQL, covering core concepts such as DDL, DML, joins, subqueries, clauses and performance optimization techniques.",
        image: Oracle,
        // link: "https://olympus.mygreatlearning.com/courses/59439/certificate?pb_id=581",
    },
    {
        title: "National Science Day Certifications",
        description: "Awarded for presenting an Automated Monitoring System with Facial Recognition, showcasing real-time face detection and attendance tracking using AI and computer vision technologies.",
        image: Nsdpy,
        // link: "https://olympus.mygreatlearning.com/courses/59439/certificate?pb_id=581",
    },
    {
        title: "Advanced Threats",
        description: "Recognized for gaining practical knowledge in identifying, analyzing, and mitigating cyber threats and vulnerabilities, including malware analysis, risk assessment, and secure system practices.",
        image: Threats,
        // link: "https://olympus.mygreatlearning.com/courses/59439/certificate?pb_id=581",
    },
]


function Certification() {
    return (
        <section
            id="certification"
            className="min-h-screen py-16 px-6 lg:px-24"
        >
            <h2 className="text-2xl font-bold text-center mb-20 lg:text-3xl" data-aos="fade-down">
                Certification
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {Certificate.map((Certificate, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <img
                            src={Certificate.image}
                            alt={Certificate.title}
                            className="w-full h-full object-fill rounded-t-xl"
                        />
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {Certificate.title}
                                </h3>
                                <p className="text-gray-600 text-justify">
                                    {Certificate.description}
                                </p>
                            </div>
                            {/* <div className="mt-6">
								<a
									href={Certificate.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 shadow hover:scale-105"
								>
									View Certificate
								</a>
							</div> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certification