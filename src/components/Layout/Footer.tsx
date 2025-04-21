import React from 'react';
import { LinkedinOutlined, GithubOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

interface FooterProps {
  scrollToSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Abreham Nigus
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A dedicated frontend developer and software engineering student focused on building responsive web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/abreham-nigus-377850332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <LinkedinOutlined className="text-xl" />
              </a>
              <a href="https://github.com/nbeany" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <GithubOutlined className="text-xl" />
              </a>
              <a href="tel:+251908288112" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <PhoneOutlined className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <li key={section}>
                  <button 
                    onClick={() => scrollToSection(section)}
                    className="!rounded-button whitespace-nowrap text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MailOutlined className="mr-2" />
                <span>abrehamnigus1996@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <PhoneOutlined className="mr-2" />
                <span>+251 908288112</span>
              </li>
              <li className="flex items-center text-gray-400">
                <GithubOutlined className="mr-2" />
                <span>github.com/nbeany</span>
              </li>
              <li className="flex items-center text-gray-400">
                <EnvironmentOutlined className="mr-2" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Abreham Nigus. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 text-sm transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 text-sm transition-colors cursor-pointer">
              Terms of Service
            </a>
            <a href="/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 text-sm transition-colors cursor-pointer">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;