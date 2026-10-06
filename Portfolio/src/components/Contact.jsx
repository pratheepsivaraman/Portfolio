import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    { label: "Email", value: "sivaramanpratheep@gmail.com", href: "mailto:sivaramanpratheep@gmail.com" },
    { label: "Phone", value: "+91 8778529797", href: "tel:+918778529797" },
    { label: "LinkedIn", value: "Pratheep Sivaraman", href: "#" },
    { label: "Location", value: "Kotagiri, Tamil Nadu", href: "#" },
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/pratheep-sivaraman/", label: "LinkedIn" },
    { icon: <FiGithub />, href: "https://github.com/PratheepSivaraman", label: "GitHub" },
    { icon: <FiMessageCircle />, href: "https://wa.me/918778529797", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="section-padding" style={{ paddingBottom: '50px' }}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '50px', textAlign: 'center' }}
      >
        GET IN <span className="neon-text">TOUCH</span>
      </motion.h2>

      <div className="glass" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Let's Build Something Extraordinary</h3>
            <p style={{ color: '#aaa', marginBottom: '40px' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: '#fff' }}
                >
                  <div>
                    <p style={{ fontSize: '0.8rem', color: '#0077b6', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{info.label}</p>
                    <p style={{ fontSize: '1.1rem' }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {/* Social Icons Container */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ delay: i * 0.1 }}
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    border: '1px solid rgba(0, 80, 157, 0.3)', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    fontSize: '1.8rem', 
                    color: '#fff', 
                    background: 'rgba(0, 80, 157, 0.05)',
                    boxShadow: '0 0 15px rgba(0, 80, 157, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  className="hover-target"
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#00509d';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 80, 157, 0.4)';
                    e.currentTarget.style.color = '#00509d';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 80, 157, 0.3)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 80, 157, 0.1)';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sivaramanpratheep@gmail.com&su=Portfolio Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%', textDecoration: 'none' }}
            >
              <motion.button
                className="btn-primary hover-target"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ width: '100%', padding: '20px', cursor: 'pointer' }}
              >
                SEND MESSAGE
              </motion.button>
            </motion.a>
          </div>
        </div>
      </div>

      <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '30px' }}>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Pratheep Sivaraman. Designed with passion.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
