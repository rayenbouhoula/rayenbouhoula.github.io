import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useSound } from '../context/SoundContext'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { playSound } = useSound()

  const toggleMenu = () => {
    playSound('toggle')
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    playSound('click')
    setIsOpen(false)
  }

  const handleLinkClick = () => {
    playSound('click')
    setIsOpen(false)
  }

  return (
    <>
      <button 
        className="mobile-menu-button" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Click to close */}
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}  // ✅ Close when clicking backdrop
            />
            
            {/* Menu Panel */}
            <motion.div
              className="mobile-menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="mobile-menu-header">
                <h3>Menu</h3>
                <button 
                  className="mobile-menu-close" 
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <nav className="mobile-nav">
                <a href="#home" onClick={handleLinkClick}>Home</a>
                <a href="#about" onClick={handleLinkClick}>About</a>
                <a href="#skills" onClick={handleLinkClick}>Skills</a>
                <a href="#languages" onClick={handleLinkClick}>Languages</a>
                <a href="#projects" onClick={handleLinkClick}>Projects</a>
                <a href="#github-stats" onClick={handleLinkClick}>GitHub Stats</a>
                <a href="#achievements" onClick={handleLinkClick}>Achievements</a>
                <a href="#blog" onClick={handleLinkClick}>Blog</a>
                <a href="#contact" onClick={handleLinkClick}>Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu