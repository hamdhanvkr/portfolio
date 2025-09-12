import React from 'react'
import Intern from '../assets/intern.png';

const experiance = [
    {
        title: 'Fabs ERP',
        description:
            'During my internship at Fabs Infotech, Dubai, I contributed to the development of an ERP system using Python, Django, and PostgreSQL. I worked on customizing templates, enhancing modules, and improving performance based on client requirements, which strengthened my full-stack development skills.',
        image: Intern,
        // link: "https://your-fabs-erp-link.com",
        design: "text-blue-600 hover:underline font-semibold" // optional styling for the "View" button
    },
];

function Experiance() {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 px-6 lg:px-24"
    >
      <h2 className="text-2xl font-bold text-center mb-12 lg:text-3xl" data-aos="fade-down">
        Experience
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {experiance.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-500 ease-in-out hover:-translate-y-10 flex flex-col"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {exp.title}
                </h3>
                <p className="text-gray-600 text-justify">
                  {exp.description}
                </p>
              </div>
              {exp.link && (
                <div className="mt-6 flex justify-end">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={exp.design}
                  >
                    View
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiance;
