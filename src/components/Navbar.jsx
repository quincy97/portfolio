import React, { useState } from 'react';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  return (
    <nav className="fixed w-full bg-light/90 dark:bg-dark/90 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Quincy's Portfolio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark/80 dark:text-light/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-light dark:bg-dark text-dark dark:text-light hover:bg-primary/10 transition-colors duration-300"
              >
                {isDark ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-lg bg-light dark:bg-dark text-dark dark:text-light hover:bg-primary/10 transition-colors duration-300"
            >
              {isDark ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark dark:text-light hover:text-primary focus:outline-none"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-light dark:bg-dark transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-dark dark:text-light hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;