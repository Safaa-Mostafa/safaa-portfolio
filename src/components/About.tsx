import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCloud, FiUsers } from 'react-icons/fi'

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Full Stack Development',
      description: 'Expertise in .NET Core, Angular, and modern web technologies'
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: 'Database Design',
      description: 'SQL Server, Entity Framework, and data modeling'
    },
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: 'Cloud Solutions',
      description: 'Azure deployment and scalable architecture'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Agile development and cross-functional teamwork'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated Full Stack Developer with expertise in .NET Core, Angular, SQL, and Azure.
              I have a strong passion for creating scalable, maintainable web applications that deliver
              exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I had the privilege of contributing to the <strong>Be Ready Initiative</strong>, Egypt's largest
              national upskilling program under the patronage of the President of Egypt, in collaboration
              with Cisco and Coursera. As part of the technical team, I helped build a platform that supports
              thousands of students in their learning journey.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently working at Origin Technology Solution, I focus on developing robust backend systems
              and intuitive frontend interfaces. I believe in writing clean, efficient code and following
              best practices in software architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-600 text-white rounded-lg mr-3">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {highlight.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
