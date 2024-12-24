import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiCube, HiChartBar } from 'react-icons/hi';

const Projects = () => {
  const projects = [
    {
      title: "Invoice Financing, Account Payable",
      description: "Led the project to complete up to MVP state, provided training & completed product deployment to stakeholder's team",
      tags: ["User Research", "A/B Testing", "Product Training"],
      icon: <HiChartBar className="w-8 h-8" />,
      metrics: [
        { label: "Task Completion", value: "100%" },
        { label: "User Satisfaction", value: "89%" }
      ]
    },
    {
      title: "FinTech Mobile App",
      description: "Developed product strategy and roadmap for a financial technology application to reach MVP state",
      tags: ["Mobile Design", "User Journey", "Analytics"],
      icon: <HiCube className="w-8 h-8" />,
      metrics: [
        { label: "Task Completion", value: "100%" },
        { label: "Category", value: "Finance" }
      ]
    },
    {
      title: "E-Marketplace Website/App",
      description: "Developed stickiness features to retain users and design reward structure & systems which result in 32% user retention",
      tags: ["B2B", "Product Insight", "Product Retention"],
      icon: <HiCode className="w-8 h-8" />,
      metrics: [
        { label: "Task Completion", value: "100%" },
        { label: "Improve Retention", value: "32%" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-dark dark:text-light mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-dark/50 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary transform group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark dark:text-light group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-dark/70 dark:text-light/70 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className="bg-light dark:bg-dark/30 rounded-lg p-4 transform group-hover:scale-105 transition-transform duration-300"
                      >
                        <p className="text-sm text-dark/70 dark:text-light/70">{metric.label}</p>
                        <p className="text-lg font-bold text-primary">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transform group-hover:scale-105 transition-transform duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;