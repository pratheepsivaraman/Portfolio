import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '50px' }}
      >
        ABOUT <span className="neon-text">ME</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
        <motion.div
          className="glass p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ padding: '40px' }}
        >
          <p style={{ fontSize: '1.2rem', color: '#e0e0e0', marginBottom: '20px' }}>
            Highly motivated Computer Science Engineering student specializing in Data Science, Artificial Intelligence, and Cybersecurity with a strong academic foundation in programming and analytical problem-solving.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#aaa' }}>
            Passionate about applying software skills and data-driven thinking to solve real-world problems. I thrive in challenging environments where I can leverage my technical skills to create meaningful impact.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { label: 'College', value: 'Karpagam College of Engineering' },
            { label: 'Location', value: 'Coimbatore, India' },
            { label: 'Graduation', value: 'Expected 2028' },
            { label: 'Home', value: 'Kotagiri, Tamil Nadu' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="glass"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}
            >
              <span style={{ color: '#0077b6', fontWeight: '600' }}>{item.label}</span>
              <span style={{ color: '#fff' }}>{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
