import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          height: '2px',
          backgroundColor: '#9d4edd',
          marginBottom: '20px',
          boxShadow: '0 0 10px #9d4edd',
        }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontFamily: 'Space Grotesk',
          fontSize: '1.5rem',
          letterSpacing: '5px',
          color: '#ffffff',
          fontWeight: '300',
        }}
      >
        PRATHEEP SIVARAMAN
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
