import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-dark dark:text-light mb-8">Interested in my work?</h2>
          <br></br><br></br>
          <a
            href="https://www.linkedin.com/in/quincyngkg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-dark dark:text-light rounded-lg hover:bg-primary/80 transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
            <span>Connect on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;