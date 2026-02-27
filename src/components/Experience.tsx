import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Software Engineer',
      company: 'Origin Technology Solution',
      period: 'Dec 2024 – Present',
      location: 'Egypt',
      description: 'Developing full-stack web applications using .NET Core and Angular, focusing on scalable architecture and modern development practices.',
      achievements: [
        'Built RESTful APIs with .NET Core',
        'Developed responsive frontend interfaces',
        'Implemented clean architecture patterns',
        'Collaborated with cross-functional teams'
      ]
    },
    {
      id: 2,
      position: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      period: 'Apr 2023 – Present',
      location: 'Remote',
      description: 'Providing full-stack development services to clients, specializing in .NET and Angular technologies.',
      achievements: [
        'Delivered custom web applications',
        'Maintained long-term client relationships',
        'Implemented modern UI/UX designs',
        'Optimized application performance'
      ]
    },
    {
      id: 3,
      position: '.NET Developer Intern',
      company: 'Information Technology Institute',
      period: 'May 2024 – Sep 2024',
      location: 'Egypt',
      description: 'Completed intensive training program in full-stack .NET and Angular development.',
      achievements: [
        'Mastered .NET Core and Entity Framework',
        'Built complete web applications',
        'Learned industry best practices',
        'Collaborated on team projects'
      ]
    },
    {
      id: 4,
      position: 'Full Stack Developer',
      company: 'Be Ready Initiative',
      period: '2023 – 2024',
      location: 'Egypt',
      description: 'Part of the Tech Team building Egypt\'s largest national upskilling initiative platform, supporting thousands of students.',
      achievements: [
        'Contributed to platform scalability',
        'Implemented user authentication systems',
        'Built interactive learning modules',
        'Collaborated with Cisco and Coursera teams'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-0.5"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full top-6 ${
                index % 2 === 0 ? 'md:right-0 md:transform md:translate-x-2' : 'md:left-0 md:transform md:-translate-x-2'
              }`}></div>

              {/* Experience card */}
              <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              } hover:shadow-xl transition-shadow duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="flex flex-col text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center mt-1">
                      <FiMapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {experience.description}
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
