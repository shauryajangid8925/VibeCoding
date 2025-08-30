/**
 * File: src/components/Events.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Arrow function / React component
const Events = () => {
  const events = [
    { name: "Tech Fest", date: "March 15-17, 2023" },
    { name: "Cultural Festival", date: "April 5-7, 2023" },
    { name: "Sports Meet", date: "February 10-12, 2023" },
    { name: "Industry Conclave", date: "May 20, 2023" },
    { name: "Hackathon", date: "June 12-13, 2023" },
    { name: "Alumni Meet", date: "July 8, 2023" }
  ];

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Events
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
            >
              <h3 className="text-xl font-aeion text-blue-800 mb-2">{event.name}</h3>
              <p className="text-gray-700">{event.date}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the main component
export default Events;