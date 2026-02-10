import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const username = 'rayenbouhoula'

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
          className="github-link-container"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ textAlign: 'center', padding: '40px 0' }}
        >
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Check out my GitHub profile to see my latest projects and contributions!
          </p>
          <a
            href={`https://github.com/${username}`}
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