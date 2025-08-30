/**
 * File: src/components/CourseApplicationModal.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

// Arrow function / React component
const FloatingShapes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime + index * 0.5) * 0.2;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[0.5, 32, 32]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </Sphere>
      <Sphere args={[0.7, 32, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#6366f1" transparent opacity={0.6} />
      </Sphere>
      <Sphere args={[0.4, 32, 32]} position={[0, 0, -2]}>
        <meshStandardMaterial color="#818cf8" transparent opacity={0.6} />
      </Sphere>
    </group>
  );
};

// Arrow function / React component
const CourseApplicationModal = ({ isOpen, onClose }) => {
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle application submission logic here
    console.log('Application submitted:', applicationData);
    // You would typically make an API call here
    onClose(); // Close modal after submission
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Three.js Background */}
              <div className="absolute inset-0 z-0 opacity-10">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <FloatingShapes />
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
              </div>

              <div className="relative z-10 p-6 md:p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">Course Application</h2>
                  <p className="text-gray-600 text-sm md:text-base">Apply for your desired program at BMIET</p>
                </div>

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={applicationData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                      Select Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={applicationData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="btech-cse">B.Tech Computer Science</option>
                      <option value="btech-mech">B.Tech Mechanical Engineering</option>
                      <option value="btech-eee">B.Tech Electrical Engineering</option>
                      <option value="btech-civil">B.Tech Civil Engineering</option>
                      <option value="mtech-cse">M.Tech Computer Science</option>
                      <option value="mba">MBA</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                      Highest Qualification
                    </label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={applicationData.qualification}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="e.g., 12th Standard, Diploma, etc."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={applicationData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
                      placeholder="Any additional information you'd like to share"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md text-sm md:text-base"
                  >
                    Submit Application
                  </button>
                </form>

                <div className="mt-6 text-center text-xs md:text-sm text-gray-600">
                  Have questions about admissions?{" "}
                  <a href="#" className="text-blue-600 font-medium hover:underline">
                    Contact our admission cell
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Exporting the main component
export default CourseApplicationModal;