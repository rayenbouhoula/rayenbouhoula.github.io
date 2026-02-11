import { motion } from 'framer-motion'
import { FaClock, FaCalendar, FaArrowRight } from 'react-icons/fa'
import { useSound } from '../context/SoundContext'

const blogPosts = [
  {
    id: 1,
    title: 'Building Modern React Applications',
    excerpt: 'Explore the best practices and modern techniques for building scalable React applications with hooks, context, and performance optimization.',
    date: 'January 15, 2024',
    readTime: '5 min read',
    tags: ['React', 'JavaScript', 'Web Development'],
    image: 'https://opensource.fb.com/img/projects/react.jpg',
    link:'https://modernreactapplications.hashnode.dev/',
  },
  {
    id: 2,
    title: 'My Journey in Software Development',
    excerpt: 'From my first line of code to becoming a software engineering student, discover the experiences and lessons that shaped my development journey.',
    date: 'December 20, 2023',
    readTime: '8 min read',
    tags: ['Career', 'Learning', 'Personal'],
    image: 'https://www.dice.com/binaries/large/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg',
    link:'https://myjourneyinsoftwaredevelopment.hashnode.dev/',
  },
  {
    id: 3,
    title: 'Flutter vs React Native: A Comparison',
    excerpt: 'An in-depth comparison of two popular cross-platform mobile development frameworks, their strengths, weaknesses, and use cases.',
    date: 'November 10, 2023',
    readTime: '6 min read',
    tags: ['Flutter', 'React Native', 'Mobile'],
    image: 'https://www.rishabhsoft.com/wp-content/uploads/2023/12/Banner_-Flutter-vs-React-Native_Dec_2023_Image.jpg',
    link:'https://fluttervsreactnativee.hashnode.dev/',
  }
]

const Blog = () => {
  const { playSound } = useSound()

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
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="blog" id="blog">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div 
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              className="blog-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="blog-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
                />
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <FaCalendar /> {post.date}
                  </span>
                  <span className="blog-read-time">
                    <FaClock /> {post.readTime}
                  </span>
                </div>
                
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                
                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                  onClick={() => playSound('click')}
                >
                  Read More <FaArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Blog