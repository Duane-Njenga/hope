// src/components/AnimatedSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// This is a reusable wrapper component.
// Anything you wrap in <AnimatedSection> will have this animation effect.
const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      // Animation will start with the element being invisible and 50px down
      initial={{ opacity: 0, y: 50 }} 
      
      // Animate to fully visible and at its original position
      whileInView={{ opacity: 1, y: 0 }} 
      
      // This ensures the animation only happens once when it enters the screen
      viewport={{ once: true }} 
      
      // Control the speed and style of the animation
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;