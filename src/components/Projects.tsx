import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Career Services Management System',
      description: 'A comprehensive platform for managing career services, including job postings, applications, and student tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['Angular', '.NET Core', 'PostgreSQL', 'TypeScript'],
      githubUrl: 'https://github.com/Safaa-Mostafa/career-services-system',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Angular', '.NET Core', 'EF Core', 'SQL Server', 'Stripe'],
      githubUrl: 'https://github.com/Safaa-Mostafa/ecommerce-platform',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Waddabha Freelancing Platform (API)',
      description: 'RESTful API for a freelancing platform connecting clients with freelancers, featuring real-time messaging.',
      image: '/api/placeholder/400/250',
      technologies: ['.NET Core', 'EF Core', 'SignalR', 'JWT', 'SQL Server'],
      githubUrl: 'https://github.com/Safaa-Mostafa/waddabha-api',
      liveUrl: '#',
      featured: false
    }
  ]

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Angular': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      '.NET Core': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'PostgreSQL': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'TypeScript': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'EF Core': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'SQL Server': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
      'Stripe': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'SignalR': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'JWT': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    }
    return colors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">🚀</div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                  >
                    Live Demo
                    <FiExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Safaa-Mostafa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 rounded-lg font-semibold"
          >
            <FiGithub className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
