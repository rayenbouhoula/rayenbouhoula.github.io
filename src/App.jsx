import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { SoundProvider } from './context/SoundContext'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Languages from './components/Languages'  // ← ADD THIS LINE
import GitHubStats from './components/GitHubStats'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import MobileMenu from './components/MobileMenu'
import CustomCursor from './components/CustomCursor'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { useSound } from './context/SoundContext'

const AppContent = () => {
  const { isMuted, toggleMute } = useSound()

  return (
    <div className="app">
      <CustomCursor />
      <ScrollProgress />
      
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <button 
             onClick={() => window.location.reload()} 
             style={{
             background: 'none',
             border: 'none',
             color: 'inherit',
             fontSize: '1.5rem',
             fontWeight: 'bold',
             cursor: 'pointer'
              }}
             >
             RB
            </button>
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="navbar-actions">
            <button 
              className="sound-toggle"
              onClick={toggleMute}
              aria-label="Toggle sound"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </nav>
      
      <Hero />
      <About />
      <Skills />
      <Languages />  {/* ← ADD THIS LINE */}
      <GitHubStats />
      <Achievements />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <AppContent />
      </SoundProvider>
    </ThemeProvider>
  )
}
export default App