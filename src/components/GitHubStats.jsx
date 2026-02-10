import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [statsStatus, setStatsStatus] = useState('loading')
  const [langsStatus, setLangsStatus] = useState('loading')
  const [streakStatus, setStreakStatus] = useState('loading')

  const username = 'rayenbouhoula'
  
  // Try different approach - use direct image URLs without cache issues
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&icon_color=00d9ff&text_color=ffffff&count_private=true&include_all_commits=true`
  
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&text_color=ffffff&langs_count=8`

  const streakUrl = `https://streak-stats.demolab.com/?user=${username}&theme=radical&hide_border=true&background=0a0a0a&ring=00d9ff&fire=00d9ff&currStreakLabel=00d9ff`

  // Preload images
  useEffect(() => {
    if (!isInView) return

    // Preload stats image
    const statsImg = new Image()
    statsImg.onload = () => {
      console.log('Stats image preloaded successfully')
      setStatsStatus('loaded')
    }
    statsImg.onerror = (e) => {
      console.error('Stats image failed to preload:', e)
      setStatsStatus('error')
    }
    statsImg.src = statsUrl

    // Preload langs image
    const langsImg = new Image()
    langsImg.onload = () => {
      console.log('Languages image preloaded successfully')
      setLangsStatus('loaded')
    }
    langsImg.onerror = (e) => {
      console.error('Languages image failed to preload:', e)
      setLangsStatus('error')
    }
    langsImg.src = langsUrl

    // Preload streak image
    const streakImg = new Image()
    streakImg.onload = () => {
      console.log('Streak image preloaded successfully')
      setStreakStatus('loaded')
    }
    streakImg.onerror = (e) => {
      console.error('Streak image failed to preload:', e)
      setStreakStatus('error')
    }
    streakImg.src = streakUrl

    // Timeout fallback
    const timeout = setTimeout(() => {
      if (statsStatus === 'loading') {
        console.warn('Stats loading timeout - trying to display anyway')
        setStatsStatus('loaded') // Try to display it anyway
      }
      if (langsStatus === 'loading') {
        console.warn('Languages loading timeout - trying to display anyway')
        setLangsStatus('loaded')
      }
      if (streakStatus === 'loading') {
        console.warn('Streak loading timeout - trying to display anyway')
        setStreakStatus('loaded')
      }
    }, 8000)

    return () => clearTimeout(timeout)
  }, [isInView, statsUrl, langsUrl, streakUrl, statsStatus, langsStatus, streakStatus])

  return (
    <section className="github-stats" id="github-stats" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          GitHub Statistics
        </motion.h2>

        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* GitHub Stats Card */}
          <div className="stat-card">
            {statsStatus === 'loading' && (
              <div className="stat-loading">
                <div className="spinner"></div>
                <p>Loading stats...</p>
              </div>
            )}
            {statsStatus === 'error' ? (
              <div className="stat-error">
                <p>Stats temporarily unavailable</p>
                <a 
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-fallback-link"
                >
                  View on GitHub
                </a>
              </div>
            ) : (
              <img
                src={statsUrl}
                alt="GitHub Stats"
                crossOrigin="anonymous"
                style={{ 
                  display: statsStatus === 'loaded' ? 'block' : 'none',
                  width: '100%',
                  height: 'auto'
                }}
              />
            )}
          </div>

          {/* Top Languages Card */}
          <div className="stat-card">
            {langsStatus === 'loading' && (
              <div className="stat-loading">
                <div className="spinner"></div>
                <p>Loading languages...</p>
              </div>
            )}
            {langsStatus === 'error' ? (
              <div className="stat-error">
                <p>Languages temporarily unavailable</p>
                <a 
                  href={`https://github.com/${username}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-fallback-link"
                >
                  View Repositories
                </a>
              </div>
            ) : (
              <img
                src={langsUrl}
                alt="Top Languages"
                crossOrigin="anonymous"
                style={{ 
                  display: langsStatus === 'loaded' ? 'block' : 'none',
                  width: '100%',
                  height: 'auto'
                }}
              />
            )}
          </div>

          {/* GitHub Streak Stats */}
          <div className="stat-card stat-card-wide">
            {streakStatus === 'loading' && (
              <div className="stat-loading">
                <div className="spinner"></div>
                <p>Loading streak...</p>
              </div>
            )}
            {streakStatus === 'error' ? (
              <div className="stat-error">
                <p>Streak stats temporarily unavailable</p>
                <a 
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-fallback-link"
                >
                  View Activity
                </a>
              </div>
            ) : (
              <img
                src={streakUrl}
                alt="GitHub Streak"
                crossOrigin="anonymous"
                style={{ 
                  display: streakStatus === 'loaded' ? 'block' : 'none',
                  width: '100%',
                  height: 'auto'
                }}
              />
            )}
          </div>
        </motion.div>

        <motion.div
          className="github-link-container"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/rayenbouhoula"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubStats