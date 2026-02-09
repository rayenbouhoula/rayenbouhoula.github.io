import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useSound } from '../context/SoundContext'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { playSound } = useSound()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleToggle = () => {
    playSound('click')
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    playSound('whoosh')
    setIsOpen(false)
  }

  return (
    <>
      <motion.button
        className="mobile-menu-button"
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleToggle}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <nav className="mobile-nav-links">
                <a href="#home" onClick={handleLinkClick}>Home</a>
                <a href="#about" onClick={handleLinkClick}>About</a>
                <a href="#skills" onClick={handleLinkClick}>Skills</a>
                <a href="#projects" onClick={handleLinkClick}>Projects</a>
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
