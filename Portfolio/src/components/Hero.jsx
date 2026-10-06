import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import your hero image. Make sure it stays at src/assets/hero.png
import heroImage from '../assets/hero.png'; 

const Hero = () => {
  const [index, setIndex] = useState(0);
  const roles = [
    "AI Enthusiast",
    "Cybersecurity Learner",
    "Web Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero"
      className="section-padding" 
      style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'relative',
        zIndex: 1,
        background: 'transparent',
        overflow: 'hidden'
      }}
    >
      {/* Content Left */}
      <div style={{ width: '55%', zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '1.2rem', color: '#00509d', fontWeight: '600', marginBottom: '10px', letterSpacing: '2px' }}
        >
          HI, I’M
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1', marginBottom: '20px', color: '#fff', letterSpacing: '-1px' }}
        >
          PRATHEEP <br />
          <span className="neon-text" style={{ fontSize: '5rem' }}>SIVARAMAN</span>
        </motion.h1>
        
        <div style={{ height: '50px', marginBottom: '30px' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[index]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              style={{ fontSize: '2rem', color: '#e0e0e0', fontWeight: '300', letterSpacing: '1px' }}
            >
              {roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '550px', marginBottom: '45px', lineHeight: '1.8' }}
        >
          Computer Science Engineering Student specializing in Data Science and AI. Building futuristic, high-performance web applications with a focus on security and analytical problem-solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: 'flex', gap: '25px' }}
        >
          <a href="#projects" className="btn-primary hover-target" style={{ padding: '15px 35px' }}>View Projects</a>
          <a 
            href="/resume.pdf" 
            download="Pratheep_Sivaraman_Resume.pdf" 
            className="btn-primary hover-target" 
            style={{ borderColor: '#fff', color: '#fff', padding: '15px 35px' }}
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Hero Visual Right - Final Cinematic Polish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ width: '45%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}
      >
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '600px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Animated Ambient Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, #00509d 0%, transparent 70%)',
              filter: 'blur(100px)',
              zIndex: 1
            }}
          />

          {/* Luxury Technical Accents */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '550px',
              height: '550px',
              border: '1px dashed rgba(0, 80, 157, 0.2)',
              borderRadius: '50%',
              zIndex: 0
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '480px',
              height: '480px',
              border: '1px solid rgba(0, 80, 157, 0.1)',
              borderRadius: '50%',
              zIndex: 0
            }}
          />

          {/* Photo Frame Container */}
          <motion.div
            style={{
              position: 'relative',
              zIndex: 2,
              width: '420px',
              height: '530px',
              borderRadius: '40px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 80, 157, 0.25)',
              background: '#0a0a0a',
              transformStyle: 'preserve-3d'
            }}
            whileHover={{ y: -10, rotateY: -5, boxShadow: '0 40px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 80, 157, 0.4)' }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={heroImage} 
              alt="Pratheep Sivaraman" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.05) brightness(1)',
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            {/* Elegant Vignette Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, transparent 30%, rgba(10, 10, 10, 0.4) 100%)',
              pointerEvents: 'none'
            }} />
            {/* Bottom Reveal Gradient */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '35%',
              background: 'linear-gradient(to top, rgba(10, 10, 10, 0.9), transparent)',
              pointerEvents: 'none'
            }} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
