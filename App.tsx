import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import VideoEditing from './components/VideoEditing';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import SplashCursor from './components/SplashCursor';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or saved local storage on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'dark bg-slate-950' : 'bg-[#fdfbf7] bg-grid-pattern'}`}>
      <SplashCursor />
      <StarBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Hero />
          <Skills />
          <Projects />
          <ExperienceAndEducation />
          <VideoEditing />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;