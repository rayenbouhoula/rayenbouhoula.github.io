import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useSound } from '../context/SoundContext'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { playSound } = useSound()

  const toggleMenu = () => {
    playSound('toggle')
    setIsOpen(prev => !prev)
  }

  const closeMenu = () => {
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
            {/* BACKDROP */}
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* MENU PANEL */}
            <motion.div
              className="mobile-menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // ⭐ IMPORTANT
            >
              <nav className="mobile-nav">
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#blog" onClick={closeMenu}>Blog</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
