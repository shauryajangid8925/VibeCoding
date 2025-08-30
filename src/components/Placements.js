/**
 * File: src/components/Placements.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Arrow function / React component
const Placements = () => {
  const companies = [
    "Microsoft", "Google", "Amazon", "Infosys", "Tata", "Wipro",
    "Accenture", "IBM", "Intel", "Nvidia", "Adobe", "Oracle"
  ];

  const stats = [
    { value: "95%", label: "Placement Rate" },
    { value: "₹12 LPA", label: "Average Package" },
    { value: "₹42 LPA", label: "Highest Package" },
    { value: "150+", label: "Companies Visited" }
  ];

  return (
    <section id="placements" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Placements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-600 text-white p-6 rounded-lg text-center"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div>{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.h3 
          className="text-2xl font-aeion text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Recruiters
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-100 p-4 rounded-lg text-center"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the main component
export default Placements;