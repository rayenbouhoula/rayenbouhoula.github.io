import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import { socialLinks, personalInfo } from '../config'
import { useSound } from '../context/SoundContext'
import ParticlesBackground from './ParticlesBackground'

const Hero = () => {
  const [showCVModal, setShowCVModal] = useState(false)
  const { playSound } = useSound()

  const CV_URL = `${import.meta.env.BASE_URL}cv/RayenBouhoula1.pdf`

  const handleCVPreview = () => {
    playSound('click')
    setShowCVModal(true)
  }

  const handleCVDownload = () => {
    playSound('click')
    const link = document.createElement('a')
    link.href = CV_URL
    link.download = 'RayenBouhoula_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const closeCVModal = () => {
    playSound('click')
    setShowCVModal(false)
  }

  return (
    <section className="hero" id="home">
      <ParticlesBackground />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'Software Engineering Student | Application & Web Developer',
              2000,
              'Software Engineering Student | Flutter Developer',
              2000,
              'Software Engineering Student | Full Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a 
            href="#projects" 
            className="btn btn-primary"
            onClick={() => playSound('click')}
          >
            View Projects
          </a>

          <button 
            onClick={handleCVPreview} 
            className="btn btn-secondary"
          >
            <FaFileAlt /> View My CV
          </button>

          <a 
            href="#contact" 
            className="btn btn-secondary"
            onClick={() => playSound('click')}
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => playSound('click')}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* CV Modal with Download Button */}
      {showCVModal && (
        <motion.div
          className="cv-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCVModal}
        >
          <motion.div
            className="cv-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cv-modal-close" onClick={closeCVModal}>
              ✕
            </button>
            
            <div className="cv-modal-actions">
              <button 
                className="btn btn-primary"
                onClick={handleCVDownload}
              >
                📥 Download CV
              </button>
            </div>

            <iframe
              src={CV_URL}
              width="100%"
              height="100%"
              title="CV Preview"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero