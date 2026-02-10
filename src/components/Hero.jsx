import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import { socialLinks, personalInfo } from '../config'
import { useSound } from '../context/SoundContext'
import ParticlesBackground from './ParticlesBackground'

const Hero = () => {
  const [showCVModal, setShowCVModal] = useState(false)
  const { playSound } = useSound()

  const CV_URL = `${import.meta.env.BASE_URL}cv/RayenBouhoula1.pdf`

  const handleCVDownload = () => {
    playSound('click')
    const link = document.createElement('a')
    link.href = CV_URL
    link.download = 'RayenBouhoula1.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCVPreview = () => {
    playSound('click')
    setShowCVModal(true)
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
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <button onClick={handleCVDownload} className="btn btn-secondary">
            <FaDownload /> Download CV
          </button>

          <button onClick={handleCVPreview} className="btn btn-secondary">
            Preview CV
          </button>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
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
        </motion.div>
      </motion.div>

      {/* CV Preview Modal */}
      {showCVModal && (
        <motion.div
          className="cv-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowCVModal(false)}
        >
          <motion.div
            className="cv-modal"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cv-modal-close"
              onClick={() => setShowCVModal(false)}
            >
              ×
            </button>

            <iframe
              src={CV_URL}
              title="CV Preview"
              width="100%"
              height="100%"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero