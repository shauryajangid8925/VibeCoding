/**
 * File: src/components/Courses.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Arrow function / React component
const CourseCard = ({ title, duration, seats, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
    >
      <h3 className="text-xl font-aeion text-blue-800 mb-2">{title}</h3>
      <div className="flex justify-between text-gray-600 mb-4">
        <span>Duration: {duration}</span>
        <span>Seats: {seats}</span>
      </div>
      <p className="text-gray-700 mb-4">
        Comprehensive program covering all aspects of {title.toLowerCase()} with hands-on projects and industry exposure.
      </p>
      <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
        Learn More →
      </button>
    </motion.div>
  );
};

// Arrow function / React component
const Courses = () => {
  const courses = [
    { title: "Computer Science", duration: "4 years", seats: "120" },
    { title: "Electrical Engineering", duration: "4 years", seats: "80" },
    { title: "Mechanical Engineering", duration: "4 years", seats: "90" },
    { title: "Civil Engineering", duration: "4 years", seats: "70" },
    { title: "Artificial Intelligence", duration: "4 years", seats: "60" },
    { title: "Data Science", duration: "4 years", seats: "60" },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Courses
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              title={course.title}
              duration={course.duration}
              seats={course.seats}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the main component
export default Courses;