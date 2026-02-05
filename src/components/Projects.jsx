import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiFlutter, SiFirebase, SiReact, SiJavascript, SiPython, SiStreamlit } from 'react-icons/si'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'ATS Resume Scanner Pro',
      description: 'AI-powered resume analyzer that helps optimize resumes for Applicant Tracking Systems. Features skill detection, job matching, visual analytics, and detailed optimization tips.',
      tech: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Streamlit', icon: <SiStreamlit /> },
      ],
      github: 'https://github.com/rayenbouhoula/ATS-Scanner',
      demo: 'https://github.com/rayenbouhoula/ATS-Scanner',
      icon: '💼'
    },
    {
      title: 'E-Commerce App',
      description: 'A full-featured mobile e-commerce application built with Flutter and Firebase, featuring real-time inventory, secure payments, and user authentication.',
      tech: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Firebase', icon: <SiFirebase /> },
      ],
      github: 'https://github.com/rayenbouhoula/ecommerce-app',
      demo: 'https://rayenbouhoula.github.io/ecommerce-app',
      icon: '🛍️'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with geolocation, 7-day forecast, and beautiful animations. Integrated with Open-Meteo API for accurate weather data.',
      tech: [
        { name: 'React', icon: <SiReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
      ],
      github: 'https://github.com/rayenbouhoula/weather-dashboard',
      demo: 'https://rayenbouhoula.github.io/weather-dashboard',
      icon: '🌤️'
    },
    {
      title: 'Task Manager',
      description: 'A modern task management web application with dark theme, drag-and-drop functionality, and local storage persistence built with React.',
      tech: [
        { name: 'React', icon: <SiReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
      ],
      github: 'https://github.com/rayenbouhoula/task-manager',
      demo: 'https://rayenbouhoula.github.io/task-manager',
      icon: '✅'
    },
    {
      title: 'Portfolio Website',
      description: 'This modern, animated portfolio website built with React, Vite, and Framer Motion. Features smooth animations and responsive design.',
      tech: [
        { name: 'React', icon: <SiReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
      ],
      github: 'https://github.com/rayenbouhoula/portfolio-react',
      demo: 'https://rayenbouhoula.github.io/',
      icon: '🌐'
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={cardVariants}
            >
              <div className="project-image">
                {project.icon}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-tag">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects