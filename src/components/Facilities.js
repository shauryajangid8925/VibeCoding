/**
 * File: src/components/Facilities.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Arrow function / React component
const Facilities = () => {
  const facilities = [
    {
      name: "Library",
      description: "State-of-the-art library with over 50,000 books and digital resources"
    },
    {
      name: "Labs",
      description: "Modern laboratories equipped with the latest technology"
    },
    {
      name: "Sports Complex",
      description: "Olympic-sized swimming pool, gymnasium, and various sports facilities"
    },
    {
      name: "Hostels",
      description: "Comfortable accommodation with modern amenities"
    },
    {
      name: "Cafeteria",
      description: "Hygienic food court with diverse cuisine options"
    },
    {
      name: "Auditorium",
      description: "1000+ capacity auditorium for events and conferences"
    }
  ];

  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Facilities
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-aeion text-blue-800 mb-2">{facility.name}</h3>
              <p className="text-gray-700">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the main component
export default Facilities;