/**
 * File: src/components/About.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Arrow function / React component
const About = () => {
  const images = [
    "/images/home.avif",
    "/images/campus1.jpg",
    "/images/campus2.webp",
    "/images/campus3.jpeg",
    "/images/campus4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change images every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-aeion text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our Institute
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-aeion text-blue-800 mb-6">Our Legacy</h3>
            <p className="text-gray-700 mb-4">
              Founded in 1999, our institute has been at the forefront of engineering education 
              for nearly four decades. We have consistently evolved our curriculum to meet the 
              changing demands of the industry while maintaining our commitment to academic excellence.
            </p>
            <p className="text-gray-700 mb-4">
              Our campus spans over 50 acres with state-of-the-art facilities, creating an 
              environment conducive to learning, research, and innovation.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-800">50+</div>
                <div className="text-gray-600">Acres Campus</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-800">500+</div>
                <div className="text-gray-600">Faculty Members</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Horizontal Carousel */}
          <div className="relative overflow-hidden rounded-xl shadow-lg w-full h-64 md:h-96">
  <motion.div
    className="flex h-full"
    animate={{ x: `-${currentIndex * 100}%` }}
    transition={{ type: 'tween', duration: 1 }}
  >
    {images.map((img, idx) => (
      <div key={idx} className="flex-shrink-0 w-full h-full">
        <img 
          src={img} 
          alt={`Campus ${idx + 1}`} 
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </motion.div>
</div>


        </div>
      </div>
    </section>
  );
};

// Exporting the main component
export default About;
