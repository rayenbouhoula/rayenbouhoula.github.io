import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [statsStatus, setStatsStatus] = useState('loading')
  const [langsStatus, setLangsStatus] = useState('loading')
  const [streakStatus, setStreakStatus] = useState('loading')
  const [retryCount, setRetryCount] = useState(0)

  const username = 'rayenbouhoula'
  
  // Alternative deployments of github-readme-stats
  const statsUrls = [
    `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&icon_color=00d9ff&text_color=ffffff&count_private=true&include_all_commits=true`,
    `https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&icon_color=00d9ff&text_color=ffffff&count_private=true&include_all_commits=true`,
    `https://gh-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&icon_color=00d9ff&text_color=ffffff&count_private=true&include_all_commits=true`
  ]
  
  const langsUrls = [
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&text_color=ffffff&langs_count=8`,
    `https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&text_color=ffffff&langs_count=8`,
    `https://gh-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&text_color=ffffff&langs_count=8`
  ]

  const streakUrl = `https://streak-stats.demolab.com/?user=${username}&theme=radical&hide_border=true&background=0a0a0a&ring=00d9ff&fire=00d9ff&currStreakLabel=00d9ff`

  const [currentStatsUrl, setCurrentStatsUrl] = useState(statsUrls[0])
  const [currentLangsUrl, setCurrentLangsUrl] = useState(langsUrls[0])

  // Try to load stats with retry logic
  useEffect(() => {
    if (!isInView || statsStatus !== 'loading') return

    const img = new Image()
    const timeout = setTimeout(() => {
      console.log('Stats loading timeout, trying alternative...')
      if (retryCount < statsUrls.length - 1) {
        setRetryCount(retryCount + 1)
        setCurrentStatsUrl(statsUrls[retryCount + 1])
      } else {
        setStatsStatus('error')
      }
    }, 5000)

    img.onload = () => {
      console.log('Stats loaded successfully')
      clearTimeout(timeout)
      setStatsStatus('loaded')
    }

    img.onerror = () => {
      console.error('Stats failed to load')
      clearTimeout(timeout)
      if (retryCount < statsUrls.length - 1) {
        setRetryCount(retryCount + 1)
        setCurrentStatsUrl(statsUrls[retryCount + 1])
      } else {
        setStatsStatus('error')
      }
    }

    img.src = currentStatsUrl

    return () => clearTimeout(timeout)
  }, [isInView, currentStatsUrl, statsStatus, retryCount, statsUrls])

  // Try to load languages
  useEffect(() => {
    if (!isInView || langsStatus !== 'loading') return

    const img = new Image()
    const timeout = setTimeout(() => {
      console.log('Languages loading timeout, trying alternative...')
      if (retryCount < langsUrls.length - 1) {
        setCurrentLangsUrl(langsUrls[retryCount + 1])
      } else {
        setLangsStatus('error')
      }
    }, 5000)

    img.onload = () => {
      console.log('Languages loaded successfully')
      clearTimeout(timeout)
      setLangsStatus('loaded')
    }

    img.onerror = () => {
      console.error('Languages failed to load')
      clearTimeout(timeout)
      if (retryCount < langsUrls.length - 1) {
        setCurrentLangsUrl(langsUrls[retryCount + 1])
      } else {
        setLangsStatus('error')
      }
    }

    img.src = currentLangsUrl

    return () => clearTimeout(timeout)
  }, [isInView, currentLangsUrl, langsStatus, retryCount, langsUrls])

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
                src={currentStatsUrl}
                alt="GitHub Stats"
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
                src={currentLangsUrl}
                alt="Top Languages"
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
            <img
              src={streakUrl}
              alt="GitHub Streak"
              onLoad={() => setStreakStatus('loaded')}
              onError={() => setStreakStatus('error')}
              style={{ 
                display: streakStatus === 'loaded' ? 'block' : 'none',
                width: '100%',
                height: 'auto'
              }}
            />
            {streakStatus === 'error' && (
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