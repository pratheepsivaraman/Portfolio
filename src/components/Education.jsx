import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: "Karpagam College of Engineering",
      degree: "Bachelor of Science in Computer Science Engineering",
      duration: "2024 – 2028",
      description: "Focusing on Data Science, AI, and Cybersecurity fundamentals."
    }
  ];

  const achievements = [
    {
      title: "Winner – Application Development Competition",
      year: "2024",
      desc: "Recognized for innovative app design and implementation."
    },
    {
      title: "Runner-Up – Paper Presentation Competition",
      year: "2025",
      desc: "Presented on emerging trends in AI and its ethical implications."
    },
    {
      title: "State-Level Table Tennis Recognition",
      year: "2022",
      desc: "Demonstrated discipline and sportsmanship at the state level."
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '40px' }}
          >
            EDUCATION
          </motion.h2>

          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ padding: '30px', borderLeft: '4px solid #00509d' }}
            >
              <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '5px' }}>{edu.degree}</h3>
              <p style={{ color: '#00509d', fontWeight: '600', marginBottom: '15px' }}>{edu.institution}</p>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '10px' }}>{edu.duration}</p>
              <p style={{ color: '#eee' }}>{edu.description}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '40px' }}
          >
            ACHIEVEMENTS
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                className="glass"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                style={{ padding: '20px', transition: 'all 0.3s ease' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600', maxWidth: '80%' }}>{ach.title}</h4>
                  <span style={{ color: '#00509d', fontWeight: 'bold' }}>{ach.year}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{ach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
