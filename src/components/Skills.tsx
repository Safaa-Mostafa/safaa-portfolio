import React from 'react'
import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiCloud,
  FiTool,
  FiSmartphone,
  FiGlobe,
  FiSettings,
  FiGitBranch
} from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiCode className="w-6 h-6" />,
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FiDatabase className="w-6 h-6" />,
      skills: [
        { name: 'ASP.NET Core', level: 95 },
        { name: 'Entity Framework Core', level: 90 },
        { name: 'SQL Server', level: 85 },
        { name: 'Node.js', level: 70 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'SignalR', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <FiCloud className="w-6 h-6" />,
      skills: [
        { name: 'Azure', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'Visual Studio', level: 95 }
      ]
    },
    {
      title: 'Additional Skills',
      icon: <FiTool className="w-6 h-6" />,
      skills: [
        { name: 'Clean Architecture', level: 85 },
        { name: 'Agile/Scrum', level: 80 },
        { name: 'Unit Testing', level: 75 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Leadership', level: 75 },
        { name: 'Communication', level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Angular', 'ASP.NET Core', 'TypeScript', 'SQL Server', 'Azure',
              'Entity Framework', 'Git', 'Docker', 'Tailwind CSS', 'SignalR',
              'JWT', 'REST APIs', 'Agile', 'Scrum', 'Clean Architecture'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:shadow-md transition-shadow cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
