import React from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiLocationMarker, HiBriefcase } from 'react-icons/hi';

const Hero = () => {
  const stats = [
    { icon: <HiUser className="w-6 h-6" />, label: 'Experience', value: '3+ Years' },
    { icon: <HiBriefcase className="w-6 h-6" />, label: 'Projects', value: '10+' },
    { icon: <HiMail className="w-6 h-6" />, label: 'Email', value: 'quincy.ng97@gmail.com' },
    { icon: <HiLocationMarker className="w-6 h-6" />, label: 'Location', value: 'Selangor' },
  ];

  return (
    <section className="min-h-screen pt-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white dark:bg-dark/50 rounded-xl shadow-lg p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-primary/10">
                <img
                  src="https://media.licdn.com/dms/image/v2/C5103AQE4cEybHgD7Ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1574087406052?e=1740614400&v=beta&t=GIh8WjRH6iFMYMAc3JKKBqA609-XNk59boE7_ukWZrU"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-dark dark:text-light mb-4">
                  Ng Keng Geap (Quincy)
                </h1>
                <h2 className="text-2xl text-primary mb-4">Product Manager & UX Enthusiast</h2>
                <p className="text-dark/70 dark:text-light/70 max-w-2xl mb-6">
                  Passionate about creating user-centric products that solve real problems. 
                  Experienced in leading cross-functional teams and delivering impactful solutions.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-primary text-dark dark:text-light rounded-lg hover:bg-primary/80 transition-colors duration-300"
                  >
                    View Projects
                  </a>
                  <a
                    href="https://www.linkedin.com/in/quincyngkg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-dark/50 rounded-xl shadow-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-dark/70 dark:text-light/70">{stat.label}</p>
                    <p className="text-lg font-semibold text-dark dark:text-light">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;