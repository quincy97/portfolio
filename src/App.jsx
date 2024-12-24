import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CallToAction from './components/CallToAction';
import ThemeProvider from './context/ThemeContext';

function App() {
  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <CallToAction />
        </main>
        <footer className="bg-gray-50 dark:bg-dark/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-light/70">
            <p>© {new Date().getFullYear()} Quincy's Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;