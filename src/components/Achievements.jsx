import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaTrophy, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Using 'myAchievements' to avoid naming conflicts
  const myAchievements = [
    {
      title: 'Scientific Baccalaureate',
      organization: 'Ministry of Education (Tunisia)',
      date: 'June 2023',
      description: 'Successfully completed Scientific Baccalaureate with focus on mathematics and sciences',
      icon: <FaGraduationCap />,
      type: 'education'
    },
    {
      title: 'Software Engineering Student',
      organization: 'Must UNIVERSITY - EPI DIGITAL SCHOOL',
      date: '2023 - Present',
      description: 'Pursuing degree in Software Engineering with specialization in mobile and web development',
      icon: <FaGraduationCap />,
      type: 'education'
    },
    {
      title: 'Project Management and Entrepreneurship Workshop',
      organization: 'YALD Association (Youth Leaders Network)',
      date: '2024',
      description: 'Participated in intensive training workshop on project management methodologies and entrepreneurship fundamentals',
      icon: <FaLightbulb />,
      type: 'certification'
    },
    {
      title: 'The Zone Course – Business Soft Skills',
      organization: 'EPI - International Multidisciplinary School',
      date: '2024',
      description: 'Completed practical training on essential business soft skills including communication, teamwork, and professional development',
      icon: <FaUsers />,
      type: 'certification'
    },
    {
      title: 'Full Stack Development',
      organization: 'Self-Taught & Projects in university',
      date: '2023 - Present',
      description: 'Mastered React, Flutter, JavaScript, Python, and modern web technologies through hands-on projects',
      icon: <FaCode />,
      type: 'achievement'
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub',
      date: 'Ongoing',
      description: 'Active contributor with multiple public repositories including portfolio, task manager, and weather applications',
      icon: <FaTrophy />,
      type: 'achievement',
      link: 'https://github.com/rayenbouhoula'
    }
  ]

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
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="achievements-section" id="achievements" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements & Certifications
        </motion.h2>

        <motion.div
          className="achievements-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {myAchievements.map((item, index) => (
            <motion.div
              key={index}
              className={`achievement-item ${item.type}`}
              variants={itemVariants}
            >
              <div className="achievement-icon">
                {item.icon}
              </div>
              <div className="achievement-content">
                <h3>{item.title}</h3>
                <p className="achievement-org">{item.organization}</p>
                <p className="achievement-date">{item.date}</p>
                <p className="achievement-desc">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link"
                  >
                    View Details →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements