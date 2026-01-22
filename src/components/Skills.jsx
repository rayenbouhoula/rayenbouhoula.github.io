import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa"

import {
  SiFlutter,
  SiFirebase,
  SiTypescript,
  SiFramer,
} from "react-icons/si"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once:  true })

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon:  <FaReact /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name:  "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon:  <SiTypescript /> },
      ],
    },
    {
      title: "Backend & Services",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "REST APIs", icon: <FaNodeJs /> },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name:  "GitHub", icon: <FaGithub /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Framer Motion", icon: <SiFramer /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ?  { opacity: 1, y:  0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion. h2>

        <motion. div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ?  "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
            >
              <h3>{category. title}</h3>

              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills