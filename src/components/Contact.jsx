import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-dark dark:text-light mb-8">Let's Connect</h2>
          <div className="bg-white dark:bg-dark/50 rounded-xl shadow-lg p-8 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-dark dark:text-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-accent bg-light dark:bg-dark dark:border-accent/30 shadow-sm focus:border-primary focus:ring-primary dark:text-light"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-dark dark:text-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-accent bg-light dark:bg-dark dark:border-accent/30 shadow-sm focus:border-primary focus:ring-primary dark:text-light"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-dark dark:text-light">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-accent bg-light dark:bg-dark dark:border-accent/30 shadow-sm focus:border-primary focus:ring-primary dark:text-light"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-dark dark:text-light py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;