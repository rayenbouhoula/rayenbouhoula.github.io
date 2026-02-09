import { motion } from 'framer-motion'

const GitHubStats = () => {
  const username = 'rayenbouhoula'
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="github-stats" id="stats">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          GitHub Statistics
        </motion.h2>
        
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="stat-card">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&icon_color=00d9ff&text_color=ffffff`}
              alt="GitHub Stats"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="stat-card">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0a0a0a&title_color=00d9ff&text_color=ffffff`}
              alt="Top Languages"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="stat-card streak">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0a0a0a&ring=00d9ff&fire=00d9ff&currStreakLabel=00d9ff`}
              alt="GitHub Streak"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubStats
