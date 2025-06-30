import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaLinkedin className="text-blue-700 text-3xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamedhamdhan/',
    link: 'https://www.linkedin.com/in/mohamedhamdhan/',
  },
  {
    icon: <FaGithub className="text-gray-800 text-3xl" />,
    label: 'GitHub',
    value: 'github.com/hamdhanvkr',
    link: 'https://github.com/hamdhanvkr',
  },
  {
    icon: <FaEnvelope className="text-red-600 text-3xl" />,
    label: 'Email',
    value: 'hamdhanvkr@gmail.com',
    link: 'mailto:hamdhanvkr@gmail.com',
  },
  {
    icon: <FaPhoneAlt className="text-green-600 text-3xl" />,
    label: 'Phone',
    value: '9629601141',
    link: 'tel:9629601141',
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen  py-16"
    >
      <div className="container mx-auto px-6 lg:px-24">
        <h2 className="text-2xl font-bold text-center mb-12" data-aos="fade-down">
          Contact Me
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10"
          data-aos="fade-up"
        >
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 hover:scale-105 h-full"
            >
              <div className="shrink-0">{item.icon}</div>
              <div>
                <p className="text-lg font-semibold text-gray-800">{item.label}</p>
                <p className="text-gray-600 break-words">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Programmer Quote */}
        <div className="mt-24 text-center px-6" data-aos="fade-up" data-aos-delay="300">
          <div className="inline-block bg-white px-6 py-4 rounded-xl shadow-lg max-w-2xl mx-auto">
            <p className="text-lg italic text-gray-700">
              SELECT * FROM success WHERE motivation = 'High';
            </p>
            <p className="mt-2 text-sm text-gray-500">-- Passion drives progress --</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
