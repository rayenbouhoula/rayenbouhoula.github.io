import { motion } from 'framer-motion'
import { FaAward, FaGraduationCap, FaCode, FaTrophy } from 'react-icons/fa'

const achievements = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: 'Software Engineering Student',
    organization: 'University',
    date: '2022 - Present',
    description: 'Pursuing a degree in Software Engineering with focus on modern development practices'
  },
  {
    id: 2,
    icon: <FaCode />,
    title: 'Web Development',
    organization: 'Self-taught',
    date: '2023',
    description: 'Mastered modern web technologies including React, Node.js, and responsive design'
  },
  {
    id: 3,
    icon: <FaAward />,
    title: 'Mobile App Development',
    organization: 'Self-taught',
    date: '2023',
    description: 'Specialized in cross-platform mobile development using Flutter'
  },
  {
    id: 4,
    icon: <FaTrophy />,
    title: 'Open Source Contributor',
    organization: 'GitHub',
    date: '2023 - Present',
    description: 'Active contributor to various open-source projects and personal repositories'
  }
]

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Certifications
        </motion.h2>

        <motion.div 
          className="achievements-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              className="achievement-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <div className="achievement-meta">
                  <span className="achievement-org">{achievement.organization}</span>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <p>{achievement.description}</p>
              </div>
              
              {index < achievements.length - 1 && (
                <div className="achievement-line" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
