import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';

interface HomeProps {
  scrollToSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://public.readdy.ai/ai/img_res/395c137a086e3ceb82c6ec1b116dd430.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-indigo-100/80 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-2xl">
          {/* Main Heading with Motion */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="block">Hi, I'm Abreham Nigus</span>
            <span className="block text-xl md:text-3xl mt-2">Web Developer & Junior Data Engineer</span>
          </motion.h1>

          {/* Sub Heading with Motion */}
          <motion.p
            className="text-lg md:text-2xl text-gray-700 mb-8 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Crafting modern web apps and scalable big data processing solutions. Let's create something impactful together.
          </motion.p>

          {/* Buttons with Motion */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* View My Work Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <Button
                type="primary"
                size="large"
                className="!rounded-lg text-base font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 border-none hover:opacity-90 w-full sm:w-auto transform transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
            </motion.div>

            {/* Get In Touch Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              <Button
                size="large"
                className="!rounded-lg text-base font-semibold border-indigo-500 text-indigo-600 hover:text-indigo-700 hover:border-indigo-700 transform transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
