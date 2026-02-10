import { createContext, useContext, useState, useRef, useEffect } from 'react'

const SoundContext = createContext()

export const useSound = () => {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error('useSound must be used within SoundProvider')
  }
  return context
}

export const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false)
  const audioContextRef = useRef(null)

  useEffect(() => {
    // Initialize Web Audio API
    if (typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
  }, [])

  // Create beep sound using Web Audio API (no external files needed)
  const playBeep = (frequency = 800, duration = 100, type = 'sine') => {
    if (isMuted || !audioContextRef.current) return

    try {
      const ctx = audioContextRef.current
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      oscillator.frequency.value = frequency
      oscillator.type = type

      gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000)

      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + duration / 1000)
    } catch (error) {
      console.error('Sound error:', error)
    }
  }

  const playSound = (soundType) => {
    if (isMuted) return

    switch (soundType) {
      case 'click':
        playBeep(600, 80, 'sine')
        break
      case 'hover':
        playBeep(400, 50, 'sine')
        break
      case 'toggle':
        playBeep(700, 100, 'square')
        break
      case 'success':
        playBeep(800, 100, 'sine')
        setTimeout(() => playBeep(1000, 100, 'sine'), 100)
        break
      case 'error':
        playBeep(300, 150, 'sawtooth')
        setTimeout(() => playBeep(250, 150, 'sawtooth'), 150)
        break
      default:
        playBeep(500, 80, 'sine')
    }
  }

  const toggleMute = () => {
    setIsMuted(prev => !prev)
    // Play sound when unmuting
    if (isMuted) {
      setTimeout(() => playBeep(600, 100, 'sine'), 50)
    }
  }

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playSound }}>
      {children}
    </SoundContext.Provider>
  )
}