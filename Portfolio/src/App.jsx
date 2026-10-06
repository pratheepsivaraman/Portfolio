import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="app-container" style={{ background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <ChatBot />

        {/* Global Cinematic Background Layers */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          background: '#0a0a0a',
        }} />
        
        <div style={{
          position: 'fixed',
          top: '-10%',
          right: '-10%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle, rgba(0, 80, 157, 0.08) 0%, transparent 70%)',
          zIndex: -1,
          filter: 'blur(100px)',
        }} />

        <div style={{
          position: 'fixed',
          bottom: '-10%',
          left: '-10%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle, rgba(0, 33, 71, 0.08) 0%, transparent 70%)',
          zIndex: -1,
          filter: 'blur(100px)',
        }} />
      </motion.div>
    </div>
  );
}

export default App;
