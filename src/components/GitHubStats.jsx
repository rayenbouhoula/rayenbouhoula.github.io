import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [statsStatus, setStatsStatus] = useState('loading') // 'loading' | 'loaded' | 'error'
  const [langsStatus, setLangsStatus] = useState('loading')
  const [streakStatus, setStreakStatus] = useState('loading')

  const username = 'rayenbouhoula'
  
  // GitHub Stats API URLs with cache busting
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&icon_color=00d9ff&text_color=ffffff&count_private=true&cache_seconds=1800`
  
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&text_color=ffffff&langs_count=8&cache_seconds=1800`

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0a0a0a&ring=00d9ff&fire=00d9ff&currStreakLabel=00d9ff`

  // Fallback timeout - show error after 10 seconds
  useEffect(() => {
    const statsTimer = setTimeout(() => {
      if (statsStatus === 'loading') {
        console.warn('Stats loading timeout')
        setStatsStatus('error')
      }
    }, 10000)

    return () => clearTimeout(statsTimer)
  }, [statsStatus])

  useEffect(() => {
    const langsTimer = setTimeout(() => {
      if (langsStatus === 'loading') {
        console.warn('Languages loading timeout')
        setLangsStatus('error')
      }
    }, 10000)

    return () => clearTimeout(langsTimer)
  }, [langsStatus])

  useEffect(() => {
    const streakTimer = setTimeout(() => {
      if (streakStatus === 'loading') {
        console.warn('Streak loading timeout')
        setStreakStatus('error')
      }
    }, 10000)

    return () => clearTimeout(streakTimer)
  }, [streakStatus])

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
            {statsStatus === 'error' && (
              <div className="stat-error">
                <p>Unable to load stats</p>
                <a 
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-fallback-link"
                >
                  View on GitHub
                </a>
              </div>
            )}
            <img
              src={statsUrl}
              alt="GitHub Stats"
              loading="eager"
              onLoad={() => {
                console.log('Stats loaded successfully')
                setStatsStatus('loaded')
              }}
              onError={(e) => {
                console.error('Failed to load GitHub stats:', e)
                setStatsStatus('error')
              }}
              style={{ 
                display: statsStatus === 'loaded' ? 'block' : 'none',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>

          {/* Top Languages Card */}
          <div className="stat-card">
            {langsStatus === 'loading' && (
              <div className="stat-loading">
                <div className="spinner"></div>
                <p>Loading languages...</p>
              </div>
            )}
            {langsStatus === 'error' && (
              <div className="stat-error">
                <p>Unable to load languages</p>
                <a 
                  href={`https://github.com/${username}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-fallback-link"
                >
                  View Repositories
                </a>
              </div>
            )}
            <img
              src={langsUrl}
              alt="Top Languages"
              loading="eager"
              onLoad={() => {
                console.log('Languages loaded successfully')
                setLangsStatus('loaded')
              }}
              onError={(e) => {
                console.error('Failed to load top languages:', e)
                setLangsStatus('error')
              }}
              style={{ 
                display: langsStatus === 'loaded' ? 'block' : 'none',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>

          {/* GitHub Streak Stats */}
          <div className="stat-card stat-card-wide">
            {streakStatus === 'loading' && (
              <div className="stat-loading">
                <div className="spinner"></div>
                <p>Loading streak...</p>
              </div>
            )}
            {streakStatus === 'error' && (
              <div className="stat-error">
                <p>Unable to load streak stats</p>
                <a 
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-fallback-link"
                >
                  View Activity
                </a>
              </div>
            )}
            <img
              src={streakUrl}
              alt="GitHub Streak"
              loading="eager"
              onLoad={() => {
                console.log('Streak loaded successfully')
                setStreakStatus('loaded')
              }}
              onError={(e) => {
                console.error('Failed to load streak stats:', e)
                setStreakStatus('error')
              }}
              style={{ 
                display: streakStatus === 'loaded' ? 'block' : 'none',
                width: '100%',
                height: 'auto'
              }}
            />
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