/**
 * File: src/components/Admissions.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseApplicationModal from "./CourseApplicationModal"; // Import the new modal

// Arrow function / React component
const Admissions = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const dates = [
    { label: "Application Opens", date: "April 1, 2025" },
    { label: "Application Deadline", date: "May 31, 2025" },
    { label: "Entrance Test", date: "June 15, 2025" },
    { label: "Interview", date: "June 20-25, 2025" },
    { label: "Results", date: "July 5, 2025" },
    { label: "Counselling", date: "July 15, 2025" },
    { label: "Session Starts", date: "August 1, 2025" },
  ];

  return (
    <section id="admissions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Admissions
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Admission Process Box */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-aeion text-blue-800 mb-4">
              Admission Process
            </h3>
            <p className="text-gray-700 mb-6">
              Our admission process is designed to identify talented students
              who demonstrate academic excellence, leadership potential, and a
              passion for innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <div className="text-2xl font-bold text-blue-800 mb-2">1</div>
                <div className="font-semibold">Application</div>
                <div className="text-sm text-gray-600">Submit online form</div>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <div className="text-2xl font-bold text-blue-800 mb-2">2</div>
                <div className="font-semibold">Entrance Test</div>
                <div className="text-sm text-gray-600">
                  Institute examination
                </div>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <div className="text-2xl font-bold text-blue-800 mb-2">3</div>
                <div className="font-semibold">Interview</div>
                <div className="text-sm text-gray-600">Personal assessment</div>
              </div>
            </div>

            {/* Important Dates Scrolling Strip */}
            <h3 className="text-xl font-aeion text-blue-800 mb-3">
              Important Dates
            </h3>
            <div className="relative w-full overflow-hidden border-y border-gray-300 bg-blue-50 rounded-md">
              <div className="flex space-x-12 py-3 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
                {dates.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-blue-900 font-semibold"
                  >
                    <span>{item.label}:</span>
                    <span className="font-aeion">{item.date}</span>
                  </div>
                ))}
                {/* Duplicate for infinite loop */}
                {dates.map((item, idx) => (
                  <div
                    key={`dup-${idx}`}
                    className="flex items-center space-x-2 text-blue-900 font-semibold"
                  >
                    <span>{item.label}:</span>
                    <span className="font-aeion">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Apply Now Button */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setIsApplicationOpen(true)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Course Application Modal */}
      <CourseApplicationModal 
        isOpen={isApplicationOpen} 
        onClose={() => setIsApplicationOpen(false)} 
      />
    </section>
  );
};

// Exporting the main component
export default Admissions;