// src/components/GitHubStats.jsx

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [statsLoaded, setStatsLoaded] = useState(false)
  const [langsLoaded, setLangsLoaded] = useState(false)

  const username = 'rayenbouhoula'
  
  // Correct GitHub Stats API URLs with proper parameters
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&icon_color=00d9ff&text_color=ffffff&count_private=true`
  
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&text_color=ffffff&langs_count=8`

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0a0a0a&ring=00d9ff&fire=00d9ff&currStreakLabel=00d9ff`

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
              <div className="stat-loading">Loading stats...</div>
            )}
            <img
              src={statsUrl}
              alt="GitHub Stats"
              onLoad={() => setStatsLoaded(true)}
              onError={(e) => {
                console.error('Failed to load GitHub stats')
                e.target.style.display = 'none'
              }}
              style={{ display: statsLoaded ? 'block' : 'none' }}
            />
          </div>

          {/* Top Languages Card */}
          <div className="stat-card">
            {!langsLoaded && (
              <div className="stat-loading">Loading languages...</div>
            )}
            <img
              src={langsUrl}
              alt="Top Languages"
              onLoad={() => setLangsLoaded(true)}
              onError={(e) => {
                console.error('Failed to load top languages')
                e.target.style.display = 'none'
              }}
              style={{ display: langsLoaded ? 'block' : 'none' }}
            />
          </div>

          {/* GitHub Streak Stats */}
          <div className="stat-card stat-card-wide">
            <img
              src={streakUrl}
              alt="GitHub Streak"
              onError={(e) => {
                console.error('Failed to load streak stats')
                e.target.style.display = 'none'
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