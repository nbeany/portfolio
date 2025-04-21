import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  activeSection,
  isNavOpen,
  setIsNavOpen,
  scrollToSection,
}) => {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Abreham Nigus
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`!rounded-button whitespace-nowrap capitalize font-medium hover:text-indigo-600 transition-colors cursor-pointer ${activeSection === item ? 'text-indigo-600' : 'text-gray-700'}`}
            >
              {item}
            </button>
          ))}
          <a href="https://drive.google.com/file/d/14BsH55pzznpI7l_FSgzjiIw6knLPFWby/view?usp=drivesdk" download>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            className="!rounded-button whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 border-none hover:opacity-90"
          >
            Resume
          </Button>
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="!rounded-button whitespace-nowrap text-gray-700 focus:outline-none cursor-pointer"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isNavOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isNavOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isNavOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ${isNavOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`!rounded-button whitespace-nowrap capitalize font-medium py-2 hover:text-indigo-600 transition-colors cursor-pointer ${activeSection === item ? 'text-indigo-600' : 'text-gray-700'}`}
            >
              {item}
            </button>
          ))}
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            className="!rounded-button whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 border-none hover:opacity-90"
          >
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;