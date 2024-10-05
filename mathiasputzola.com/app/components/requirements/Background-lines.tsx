"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundLines = ({ children, className, svgOptions }: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: any; // Remplacez 'any' par un type plus spécifique si possible
}) => {
  return (
    <div
      className={`h-screen w-full bg-white dark:bg-black relative overflow-hidden ${className}`}
    >
      <SVG {...svgOptions} />
      {children}
    </div>
  );
};

const SVG = () => {
  const pathVariants = {
    initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
    animate: {
      strokeDashoffset: 0,
      strokeDasharray: "50 1300",
      opacity: [0.1, 1, 1, 0.1], // Légère modification de l'opacité
    },
  };

  // Générer les positions x pour les lignes verticales
  const xPositions = [];
  for (let x = 50; x <= 1400; x += 50) {
    xPositions.push(x);
  }

  const paths = xPositions.map((x) => `M${x} 0L${x} 900`);
  const colors = Array(paths.length).fill("#48DD3B");

  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {paths.map((path, idx) => (
        <motion.path
          key={idx}
          d={path}
          stroke={colors[idx]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
        />
      ))}
    </motion.svg>
  );
};