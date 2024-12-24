import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Product Management": [
      "Product Strategy",
      "Roadmap Planning",
      "Agile Methodologies",
      "Stakeholder Management"
    ],
    "UX/UI": [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing"
    ],
    "Technical": [
      "JIRA",
      "ClickUp",
      "Adobe XD",
      "Figma"
    ],
    "Soft Skills": [
      "Leadership",
      "Communication",
      "Crisis Problem Solving",
      "Team Collaboration"
    ]
  };

  return (
    <section id="skills" className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-dark dark:text-light">Skills & Expertise</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-dark/80 dark:text-light/80"
                  >
                    <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;