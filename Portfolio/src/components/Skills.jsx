import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React (Basics)"]
    },
    {
      title: "Tools",
      skills: ["Git", "Debugging"]
    },
    {
      title: "Other Skills",
      skills: ["Database Fundamentals", "AI/ML Foundations", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '50px' }}
      >
        TECHNICAL <span className="neon-text">SKILLS</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            className="glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: '#00509d' }}
            style={{ padding: '30px', transition: 'all 0.3s ease' }}
          >
            <h3 style={{ color: '#00509d', marginBottom: '20px', fontSize: '1.4rem' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(0, 80, 157, 0.1)',
                    border: '1px solid rgba(0, 80, 157, 0.3)',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: '#fff'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
