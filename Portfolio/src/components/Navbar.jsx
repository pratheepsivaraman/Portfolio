import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: '#0077b6',
          transformOrigin: '0%',
          zIndex: 1001,
          boxShadow: '0 0 10px #0077b6',
        }}
      />
      <nav
        className={`fixed w-full z-1000 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-6'
        }`}
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.5s ease',
          padding: scrolled ? '12px 10%' : '24px 10%',
        }}
      >
        <div className="flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.a
            href="#"
            className="text-2xl font-bold neon-text hover-target"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}
          >
            <span style={{ color: '#fff' }}></span>
          </motion.a>

          <div className="hidden md:flex space-x-8" style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="hover-target transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
