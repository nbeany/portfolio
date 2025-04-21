import React from 'react';
import { Tag } from 'antd';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://static.readdy.ai/image/a539a066cb48627df58aa75d83cd5220/c477bcc796d6391a3ad0f142cc576637.jpeg"
              alt="Abreham Nigus"
              className="rounded-lg shadow-xl w-full h-auto object-cover object-top"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a dedicated frontend developer currently pursuing my Bachelor's degree in Software Engineering at Addis Ababa University in Ethiopia. I'm passionate about creating responsive web applications and integrating frontend interfaces with backend systems.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800">My Journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My journey in software development began with HTML, CSS, and JavaScript, and I've since expanded my skills to include React for frontend development and Node.js for backend integration. I'm particularly interested in database technologies like MySQL and PostgreSQL, as well as big data systems like HDFS and Apache Druid.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-800">My Education</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm currently in my second year of studying Software Engineering at Addis Ababa University in Ethiopia. My coursework includes programming fundamentals, data structures, algorithms, database systems, and web development technologies. I'm constantly applying what I learn in class to real-world projects.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-800">Certifications</h3>
            <ul className="text-gray-700 mb-6 leading-relaxed space-y-2">
              <li className="flex items-start">
                <i className="fas fa-certificate text-indigo-500 mt-1 mr-2"></i>
                <span>Frontend Development Training | INSA, Ethiopia</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-certificate text-indigo-500 mt-1 mr-2"></i>
                <span>Data Science Training | INSA, Ethiopia</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-certificate text-indigo-500 mt-1 mr-2"></i>
                <span>Bunna Script Training | Kekros, USA</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <Tag color="blue" className="px-4 py-1 text-sm">HTML5/CSS3</Tag>
              <Tag color="purple" className="px-4 py-1 text-sm">JavaScript (ES6+)</Tag>
              <Tag color="cyan" className="px-4 py-1 text-sm">React</Tag>
              <Tag color="magenta" className="px-4 py-1 text-sm">Node.js</Tag>
              <Tag color="orange" className="px-4 py-1 text-sm">Database Systems</Tag>
              <Tag color="green" className="px-4 py-1 text-sm">Big Data Processing</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

