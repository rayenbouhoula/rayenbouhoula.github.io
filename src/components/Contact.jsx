import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'
import { socialLinks, contactInfo } from '../config'
import ContactForm from './ContactForm'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once:  true })

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
        </motion. h2>
        
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } :  {}}
          transition={{ delay:  0.2, duration: 0.6 }}
        >
          <p>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you! 
          </p>
          
          <ContactForm />
          
          <div className="contact-divider">
            <span>Or reach me directly</span>
          </div>
          
          <div className="contact-info">
            <a href={socialLinks.email}>
              <FaEnvelope /> {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`}>
              <FaPhone /> {contactInfo.phone}
            </a>
          </div>
          
          <div className="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={socialLinks.email}>
              <FaEnvelope />
            </a>
          </div>
        </motion. div>
      </div>
    </section>
  )
}

export default Contact