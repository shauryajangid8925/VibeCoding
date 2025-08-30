/**
 * File: src/components/Campus3D.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

// Arrow function / React component
const Building = ({ position, size, color, name, onBuildingClick }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        position={[0, size[1] / 2, 0]}
        onClick={() => onBuildingClick(name)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={size} />
        <meshStandardMaterial 
          color={hovered ? "#4f46e5" : color} 
          emissive={hovered ? "#3730a3" : "#000000"}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, size[1] + 1, 0]}
          color="white"
          fontSize={0.5}
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      )}
    </group>
  );
};

// Arrow function / React component
const Campus3D = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const buildings = [
    { position: [-5, 0, 0], size: [3, 4, 3], color: "#ef4444", name: "Main Building" },
    { position: [0, 0, -5], size: [4, 5, 4], color: "#10b981", name: "Library" },
    { position: [5, 0, 0], size: [3, 3, 3], color: "#3b82f6", name: "Auditorium" },
    { position: [0, 0, 5], size: [5, 6, 5], color: "#f59e0b", name: "Tech Center" },
    { position: [-5, 0, -5], size: [4, 3, 4], color: "#8b5cf6", name: "Hostel" },
    { position: [5, 0, 5], size: [4, 4, 4], color: "#ec4899", name: "Sports Complex" },
  ];

  const handleBuildingClick = (name) => {
    setSelectedBuilding(name);
  };

  return (
    <section id="campus3d" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-aeion text-center mb-8">3D Campus Experience</h2>
        
        <div className="h-96 rounded-xl overflow-hidden relative">
          <Canvas camera={{ position: [15, 15, 15], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={true} />
            
            {buildings.map((building, index) => (
              <Building
                key={index}
                position={building.position}
                size={building.size}
                color={building.color}
                name={building.name}
                onBuildingClick={handleBuildingClick}
              />
            ))}
            
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial color="#4b5563" />
            </mesh>
          </Canvas>
        </div>
        
        {selectedBuilding && (
          <div className="mt-8 p-6 bg-gray-800 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-aeion mb-4">{selectedBuilding}</h3>
            <p className="text-gray-300">
              This is a detailed description of the {selectedBuilding}. It houses state-of-the-art facilities 
              and provides an excellent environment for learning and innovation. Click on other buildings 
              to explore more about our campus.
            </p>
            <button 
              onClick={() => setSelectedBuilding(null)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Exporting the main component
export default Campus3D;