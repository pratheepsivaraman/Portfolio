import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hover-target')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      height: 20,
      width: 20,
      backgroundColor: '#9d4edd',
      mixBlendMode: 'normal',
    },
    hover: {
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      height: 80,
      width: 80,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference',
    }
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={isHovered ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: isHovered ? 'none' : '0 0 15px rgba(157, 78, 221, 0.8)',
        }}
      />
      <motion.div
        animate={{
          x: mousePos.x - 150,
          y: mousePos.y - 150,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(157, 78, 221, 0.15) 0%, rgba(157, 78, 221, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default Cursor;
