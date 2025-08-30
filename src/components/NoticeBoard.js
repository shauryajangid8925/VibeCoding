/**
 * File: src/components/NoticeBoard.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Arrow function / React component
const NoticeBoard = () => {
  const notices = [
    "Admissions for the academic year 2023-24 are now open.",
    "Last date for scholarship applications is May 30, 2023.",
    "Summer vacation begins from June 1 to June 30, 2023.",
    "Industrial visit to Tech Park scheduled on April 25, 2023.",
    "Result declaration for semester exams on May 15, 2023."
  ];

  return (
    <section id="notices" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Notice Board
        </motion.h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{notice}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the main component
export default NoticeBoard;