import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity:  1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y:  20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Rayen Bouhoula
        </motion. h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Software Engineering Student | Flutter & Web Developer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Building beautiful, functional applications with modern technologies
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </motion. div>
        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="https://github.com/rayenbouhoula" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rayen-bouhoula-4841812a9/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/rayen168038" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:rayenbouhoula578@gmail.com">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero