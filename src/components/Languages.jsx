import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaStar } from 'react-icons/fa'

const Languages = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const languages = [
    {
      name: 'Arabic',
      level: 'Native',
      stars: 5,
      description: 'Mother tongue'
    },
    {
      name: 'English',
      level: 'Professional',
      stars: 4,
      description: 'Fluent in speaking and writing'
    },
    {
      name: 'French',
      level: 'Intermediate',
      stars: 3,
      description: 'Good working knowledge'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
      >
        <FaStar 
          className={index < count ? 'star-filled' : 'star-empty'}
        />
      </motion.span>
    ))
  }

  return (
    <section className="languages-section" id="languages" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Languages
        </motion.h2>

        <motion.div
          className="languages-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              className="language-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="language-header">
                <h3>{lang.name}</h3>
                <span className="language-level">{lang.level}</span>
              </div>
              
              <div className="language-stars">
                {renderStars(lang.stars)}
              </div>
              
              <p className="language-description">{lang.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Languages