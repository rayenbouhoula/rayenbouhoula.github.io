import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [statsLoaded, setStatsLoaded] = useState(false)
  const [langsLoaded, setLangsLoaded] = useState(false)
  const [streakLoaded, setStreakLoaded] = useState(false)

  const username = 'rayenbouhoula'
  
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&icon_color=00d9ff&text_color=ffffff&count_private=true&include_all_commits=true`
  
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&text_color=ffffff&langs_count=8`

  const streakUrl = `https://streak-stats.demolab.com/?user=${username}&theme=radical&hide_border=true&background=0a0a0a&ring=00d9ff&fire=00d9ff&currStreakLabel=00d9ff`

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
            {!statsLoaded && (
              <div className="stat-loading">
                <div className="spinner"></div>
                <p>Loading stats...</p>
              </div>
            )}
            <img
              src={statsUrl}
              alt="GitHub Stats"
              loading="lazy"
              onLoad={() => setStatsLoaded(true)}
              onError={() => setStatsLoaded(true)}
              style={{ 
                width: '100%', 
                height: 'auto',
                display: statsLoaded ? 'block' : 'none'
              }}
            />
          </div>

          {/* Top Languages Card */}
          <div className="stat-card">
            {!langsLoaded && (
              <div className="stat-loading">
                <div className="spinner"></div>
                <p>Loading languages...</p>
              </div>
            )}
            <img
              src={langsUrl}
              alt="Top Languages"
              loading="lazy"
              onLoad={() => setLangsLoaded(true)}
              onError={() => setLangsLoaded(true)}
              style={{ 
                width: '100%', 
                height: 'auto',
                display: langsLoaded ? 'block' : 'none'
              }}
            />
          </div>

          {/* GitHub Streak Stats */}
          <div className="stat-card stat-card-wide">
            {!streakLoaded && (
              <div className="stat-loading">
                <div className="spinner"></div>
                <p>Loading streak...</p>
              </div>
            )}
            <img
              src={streakUrl}
              alt="GitHub Streak"
              loading="lazy"
              onLoad={() => setStreakLoaded(true)}
              onError={() => setStreakLoaded(true)}
              style={{ 
                width: '100%', 
                height: 'auto',
                display: streakLoaded ? 'block' : 'none'
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