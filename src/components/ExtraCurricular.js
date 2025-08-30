/**
 * File: src/components/ExtraCurricular.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Arrow function / React component
const ExtraCurricular = () => {
  const activities = [
    "Robotics Club",
    "Coding Competitions",
    "Sports Tournaments",
    "Cultural Fest",
    "Technical Symposium",
    "Entrepreneurship Cell",
    "Music & Arts Society",
    "Debating Society",
    "Photography Club",
    "Environmental Club"
  ];

  return (
    <section id="extracurricular" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Extra-Curricular Activities
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              {activity}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the main component
export default ExtraCurricular;