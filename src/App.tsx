import React, { useEffect, useState } from 'react';
import 'antd/dist/reset.css'; // for Ant Design v5
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects'; // 
import Contact from './pages/Contact'; 
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsNavOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header
        isScrolled={isScrolled}
        activeSection={activeSection}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        scrollToSection={scrollToSection}
      />

      <main>
        <Home scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        
      </main>

      <Footer scrollToSection={scrollToSection} />
      <ScrollToTop scrollToTop={scrollToTop} />
    </div>
  );
};

export default App;