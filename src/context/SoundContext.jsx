import { createContext, useContext, useState, useEffect } from 'react'

const SoundContext = createContext()

export const useSound = () => {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider')
  }
  return context
}

export const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(() => {
    const savedMute = localStorage.getItem('soundMuted')
    return savedMute === 'true'
  })

  useEffect(() => {
    localStorage.setItem('soundMuted', isMuted)
  }, [isMuted])

  const playSound = (soundName) => {
    if (isMuted) return
    
    try {
      const audio = new Audio(`/sounds/${soundName}.mp3`)
      audio.volume = 0.3
      audio.play().catch(err => console.log('Audio play failed:', err))
    } catch (error) {
      console.log('Sound error:', error)
    }
  }

  const toggleMute = () => {
    setIsMuted(prev => !prev)
  }

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playSound }}>
      {children}
    </SoundContext.Provider>
  )
}
