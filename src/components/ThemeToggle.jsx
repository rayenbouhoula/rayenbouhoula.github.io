import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useSound } from '../context/SoundContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const { playSound } = useSound()

  const handleToggle = () => {
    playSound('toggle')
    toggleTheme()
  }

  return (
    <motion.button
      className="theme-toggle"
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
