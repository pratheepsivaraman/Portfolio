import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Smart Agriculture IoT System",
      description: "Environmental monitoring and automated irrigation using predictive analytics for optimized farming.",
      tags: ["IoT", "Python", "Data Science"],
      color: "#0077b6"
    },
    {
      title: "Travel Assistant Alarm App",
      description: "Smart destination alert system specifically designed to assist bus travelers during their journey.",
      tags: ["Android", "Java", "GPS"],
      color: "#023e8a"
    },
    {
      title: "Hotel Website",
      description: "A fully responsive, modern hotel booking and information website with an elegant UI.",
      tags: ["HTML", "CSS", "JS"],
      color: "#03045e"
    },
    {
      title: "Photography Portfolio",
      description: "Modern creative showcase for photographers with smooth transitions and high-end aesthetics.",
      tags: ["React", "Framer Motion", "UI/UX"],
      color: "#00b4d8"
    },
    {
      title: "Event Management Website",
      description: "Interactive and colorful platform for managing events with seamless user experience.",
      tags: ["Web", "Design", "Interactive"],
      color: "#0096c7"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '50px' }}
      >
        FEATURED <span className="neon-text">PROJECTS</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            style={{ 
              position: 'relative', 
              padding: '40px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              minHeight: '300px',
              borderBottom: `4px solid ${project.color}`
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '700', maxWidth: '80%' }}>{project.title}</h3>
              </div>
              <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '1rem' }}>{project.description}</p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ color: '#0077b6', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '1px' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
