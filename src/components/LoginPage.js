// components/LoginPage.js
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
const LoginPage = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('student');
  const [loginData, setLoginData] = useState({
    studentId: '',
    teacherId: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here based on activeTab
    console.log(`Logging in as ${activeTab}`, loginData);
    // You would typically make an API call here
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
              className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
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

              <div className="relative z-10 p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-800 mb-2">Welcome to BMIET</h2>
                  <p className="text-gray-600">Please login to continue</p>
                </div>

                {/* Tab Selection */}
                <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                  <button
                    className={`flex-1 py-2 px-4 rounded-md text-center font-medium transition-colors ${activeTab === 'student' ? 'bg-white shadow-md text-blue-800' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('student')}
                  >
                    Student Login
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 rounded-md text-center font-medium transition-colors ${activeTab === 'teacher' ? 'bg-white shadow-md text-blue-800' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('teacher')}
                  >
                    Teacher Login
                  </button>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: activeTab === 'student' ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: activeTab === 'student' ? 20 : -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeTab === 'student' ? (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                              Student ID
                            </label>
                            <input
                              type="text"
                              id="studentId"
                              name="studentId"
                              value={loginData.studentId}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              placeholder="Enter your student ID"
                              required
                            />
                          </div>
                          <div className="relative">
                            <label htmlFor="studentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                              Password
                            </label>
                            <input
                              type={showPassword ? "text" : "password"}
                              id="studentPassword"
                              name="password"
                              value={loginData.password}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-10"
                              placeholder="Enter your password"
                              required
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-9 text-gray-500 hover:text-blue-600"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                              )}
                            </button>
                          </div>
                          <div className="text-right">
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700 mb-1">
                              Teacher ID
                            </label>
                            <input
                              type="text"
                              id="teacherId"
                              name="teacherId"
                              value={loginData.teacherId}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              placeholder="Enter your teacher ID"
                              required
                            />
                          </div>
                          <div className="relative">
                            <label htmlFor="teacherPassword" className="block text-sm font-medium text-gray-700 mb-1">
                              Password
                            </label>
                            <input
                              type={showPassword ? "text" : "password"}
                              id="teacherPassword"
                              name="password"
                              value={loginData.password}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-10"
                              placeholder="Enter your password"
                              required
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-9 text-gray-500 hover:text-blue-600"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                              )}
                            </button>
                          </div>
                          <div className="text-right">
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <button
                    type="submit"
                    className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md"
                  >
                    Login
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a href="#" className="text-blue-600 font-medium hover:underline">
                    Contact administration
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
export default LoginPage;