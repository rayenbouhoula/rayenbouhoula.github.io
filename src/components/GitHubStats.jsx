import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaStar, FaCodeBranch, FaEye, FaCode } from 'react-icons/fa'

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    forks: 0,
    followers: 0
  })
  const [languages, setLanguages] = useState([])
  const [topRepos, setTopRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const username = 'rayenbouhoula'

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user info
        const userRes = await fetch(`https://api.github.com/users/${username}`)
        const userData = await userRes.json()

        // Fetch repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        const reposData = await reposRes.json()

        // Calculate stats
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0)
        const totalForks = reposData.reduce((sum, repo) => sum + repo.forks_count, 0)

        setStats({
          repos: userData.public_repos,
          stars: totalStars,
          forks: totalForks,
          followers: userData.followers
        })

        // Get top languages
        const langCount = {}
        reposData.forEach(repo => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1
          }
        })

        const sortedLangs = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            count,
            percentage: ((count / reposData.length) * 100).toFixed(1)
          }))

        setLanguages(sortedLangs)

        // Get top repos
        const sorted = reposData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)

        setTopRepos(sorted)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching GitHub data:', err)
        setError(true)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section className="github-stats" id="github-stats" ref={ref}>
        <div className="container">
          <h2 className="section-title">GitHub Statistics</h2>
          <div className="stat-loading">
            <div className="spinner"></div>
            <p>Loading GitHub statistics...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="github-stats" id="github-stats" ref={ref}>
        <div className="container">
          <h2 className="section-title">GitHub Statistics</h2>
          <div className="stat-error">
            <p>Could not load GitHub stats. Please visit my profile directly.</p>
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '20px' }}
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>
    )
  }

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

        {/* Stats Overview */}
        <div className="github-overview">
          <motion.div 
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="stat-icon">
              <FaCode />
            </div>
            <div className="stat-info">
              <h3>{stats.repos}</h3>
              <p>Public Repos</p>
            </div>
          </motion.div>

          <motion.div 
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="stat-icon">
              <FaStar />
            </div>
            <div className="stat-info">
              <h3>{stats.stars}</h3>
              <p>Total Stars</p>
            </div>
          </motion.div>

          <motion.div 
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="stat-icon">
              <FaCodeBranch />
            </div>
            <div className="stat-info">
              <h3>{stats.forks}</h3>
              <p>Total Forks</p>
            </div>
          </motion.div>

          <motion.div 
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="stat-icon">
              <FaEye />
            </div>
            <div className="stat-info">
              <h3>{stats.followers}</h3>
              <p>Followers</p>
            </div>
          </motion.div>
        </div>

        {/* Top Languages */}
        {languages.length > 0 && (
          <motion.div
            className="top-languages"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="subsection-title">Most Used Languages</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={lang.name} className="language-item">
                  <div className="language-header">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-percentage">{lang.percentage}%</span>
                  </div>
                  <div className="language-bar">
                    <motion.div
                      className="language-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percentage}%` } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                  <span className="language-count">{lang.count} repositories</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Top Repositories */}
        {topRepos.length > 0 && (
          <motion.div
            className="top-repos"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="subsection-title">Popular Repositories</h3>
            <div className="repos-grid">
              {topRepos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <h4>{repo.name}</h4>
                  <p>{repo.description || 'No description available'}</p>
                  <div className="repo-stats">
                    {repo.language && (
                      <span className="repo-language">
                        <span className="language-dot"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="repo-stat">
                      <FaStar /> {repo.stargazers_count}
                    </span>
                    <span className="repo-stat">
                      <FaCodeBranch /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          className="github-link-container"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubStats