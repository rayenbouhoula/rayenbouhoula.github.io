import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y:  20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity:  0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            Hi! I'm Rayen Bouhoula, a passionate Software Engineering student with a keen interest 
            in mobile and web development. I specialize in creating elegant solutions to complex problems. 
          </p>
          <p>
            My journey in software development has equipped me with skills in Flutter, React, and various 
            modern web technologies. I'm constantly learning and exploring new ways to build better applications.
          </p>
          <p>
            When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to 
            open-source projects, and sharing knowledge with the developer community.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About