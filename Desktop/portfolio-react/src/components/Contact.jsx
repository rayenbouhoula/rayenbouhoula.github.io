import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ?  { opacity: 1, y:  0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you! 
          </p>
          
          <div className="contact-info">
            <a href="mailto:rayenbouhoula578@gmail.com">
              <FaEnvelope /> rayenbouhoula578@gmail.com
            </a>
          </div>
          
          <div className="social-links">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact