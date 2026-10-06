import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiCpu } from 'react-icons/fi';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Pratheep's AI assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);

  const personalData = {
    name: "Pratheep Sivaraman",
    college: "Karpagam College of Engineering",
    location: "Coimbatore, India (Home: Kotagiri, Tamil Nadu)",
    graduation: "Expected 2028",
    skills: "Python, C, C++, Java, JavaScript, HTML5, CSS3, React, Git, Debugging, AI/ML, Data Science, Cybersecurity",
    projects: "Smart Agriculture IoT System, Travel Assistant Alarm App, Hotel Website, Photography Portfolio, Event Management Website",
    contact: "Email: sivaramanpratheep@gmail.com, Phone: +91 8778529797",
    hobbies: "Table Tennis, Coding, Learning about new Tech"
  };

  const getBotResponse = (input) => {
    const query = input.toLowerCase();
    
    if (query.includes('hello') || query.includes('hi') || query.includes('hey')) return "Hello! I'm your cinematic guide to Pratheep's portfolio. What would you like to explore today?";
    if (query.includes('skill') || query.includes('technolog') || query.includes('know')) return `Pratheep has a strong command over: ${personalData.skills}. He is particularly passionate about AI/ML and Data Science.`;
    if (query.includes('project') || query.includes('work') || query.includes('build')) return `His top projects include the Smart Agriculture IoT System and the Travel Assistant Alarm App. You can scroll down to the Featured Projects section to see the full list with details!`;
    if (query.includes('college') || query.includes('study') || query.includes('education') || query.includes('university')) return `Pratheep is a Computer Science Engineering student at ${personalData.college} (Batch of 2024-2028).`;
    if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('hire')) return `You can reach him directly at ${personalData.contact}. He's always open to new opportunities!`;
    if (query.includes('location') || query.includes('where')) return `He is from Kotagiri, Tamil Nadu, and is currently studying in Coimbatore.`;
    if (query.includes('who are you') || query.includes('name')) return "I am Pratheep's Portfolio Assistant. I'm here to answer any questions you have about his engineering journey.";
    if (query.includes('resume') || query.includes('cv')) return "You can download Pratheep's full resume using the 'Download Resume' button in the Hero section at the top of the page.";
    if (query.includes('achievement') || query.includes('win')) return "Pratheep has won multiple competitions, including an Application Development Competition in 2024. Check out the Achievements section for more!";
    if (query.includes('thank')) return "You're welcome! Let me know if you need anything else.";
    
    return "That's an interesting question! While I'm still learning, I can tell you about Pratheep's projects, skills, or education. You can also contact him directly using the links in the 'Get in Touch' section.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage = { type: 'bot', text: getBotResponse(inputValue) };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 5000 }}>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          background: '#00509d',
          border: 'none',
          color: '#fff',
          fontSize: '1.8rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(0, 80, 157, 0.4)',
        }}
      >
        {isOpen ? <FiX /> : <FiMessageSquare />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="glass"
            style={{
              position: 'absolute',
              bottom: '85px',
              right: '0',
              width: '380px',
              height: '550px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {/* Header */}
            <div style={{ padding: '20px', background: 'rgba(0, 80, 157, 0.2)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00509d', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                <FiCpu />
              </div>
              <div>
                <h4 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>AI Assistant</h4>
                <p style={{ margin: 0, color: '#00d2ff', fontSize: '0.7rem', fontWeight: 'bold' }}>ONLINE</p>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    alignSelf: msg.type === 'bot' ? 'flex-start' : 'flex-end',
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: msg.type === 'bot' ? '0 15px 15px 15px' : '15px 15px 0 15px',
                    background: msg.type === 'bot' ? 'rgba(255,255,255,0.05)' : '#00509d',
                    color: '#fff',
                    fontSize: '0.9rem',
                    border: msg.type === 'bot' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    lineHeight: '1.4'
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '25px',
                  padding: '10px 20px',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: '#00509d',
                  border: 'none',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <FiSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
