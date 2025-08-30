/**
 * File: src/components/Highlights.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Arrow function / React component
const HighlightCard = ({ title, value, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
    >
      <h3 className="text-2xl font-aeion text-blue-800 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-gray-800 mb-2">{value}</div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Arrow function / React component
const Highlights = () => {
  const highlightsData = [
    {
      title: "Courses",
      value: "25+",
      description: "Undergraduate and postgraduate programs"
    },
    {
      title: "Placements",
      value: "95%",
      description: "Students placed in top companies"
    },
    {
      title: "Alumni",
      value: "10K+",
      description: "Successful graduates worldwide"
    },
    {
      title: "Admissions",
      value: "2023",
      description: "Fall intake now open"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Institute Highlights
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightsData.map((item, index) => (
            <HighlightCard 
              key={index}
              title={item.title}
              value={item.value}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the main component
export default Highlights;