/**
 * File: src/components/PreLoader.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion";

// ===================== Animated Words =====================
// Arrow function / React component
const AnimatedText = () => {
  const meshRef = useRef();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fontSize, setFontSize] = useState(1.5);
  const [maxWidth, setMaxWidth] = useState(10);

  const bmitWords = [
    "B.M.I.E.T.",
    "Excellence",
    "Innovation",
    "Technology",
    "Engineering",
    "Research",
    "Leadership",
    "Future"
  ];

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#FFD93D",
    "#1A535C",
    "#FF9F1C",
    "#2EC4B6",
    "#6A4C93",
    "#38B000"
  ];

  // ✅ Responsive font size + maxWidth
  useEffect(() => {
    const updateResponsive = () => {
      if (window.innerWidth > 1024) {
        setFontSize(1.5); // Desktop
        setMaxWidth(10);
      } else if (window.innerWidth > 768) {
        setFontSize(1.1); // Tablet
        setMaxWidth(8);
      } else {
        setFontSize(0.4); // Mobile
        setMaxWidth(5);   // Narrower width so text stays inside screen
      }
    };

    updateResponsive();
    window.addEventListener("resize", updateResponsive);
    return () => window.removeEventListener("resize", updateResponsive);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const word = bmitWords[currentWordIndex];

    if (charIndex < word.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentWordIndex((prev) => (prev + 1) % bmitWords.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentWordIndex]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <Text
        fontSize={fontSize}
        font="/fonts/Montserrat-Bold.ttf"
        color={colors[currentWordIndex % colors.length]}
        anchorX="center"
        anchorY="middle"
        maxWidth={maxWidth}   // ✅ responsive width
        textAlign="center"
      >
        {bmitWords[currentWordIndex].substring(0, charIndex)}
      </Text>
    </group>
  );
};

// ===================== Preloader =====================
// Arrow function / React component
const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedText />
      </Canvas>

      {/* Overlay Text + Loading bar */}
      <div className="absolute bottom-10 text-white text-center px-4">
        <p className="font-aeion text-lg mb-2">
          B.M. Institute Of Engineering And Technology
        </p>
        <p className="text-sm">Loading your campus experience...</p>

        <div className="w-48 h-1 bg-white/30 rounded-full mt-4 mx-auto">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Exporting the main component
export default Preloader;
