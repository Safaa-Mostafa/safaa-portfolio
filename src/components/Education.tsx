import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiAward, FiBookOpen } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Higher Technological Institute',
      period: '2019 – 2023',
      location: 'Egypt',
      grade: 'Excellent with Honor',
      description: 'Comprehensive computer science program focusing on software development, algorithms, data structures, and system design.',
      achievements: [
        'Graduated with Excellent with Honor degree',
        'Dean\'s List for 6 semesters',
        'Active member of Computer Science Society',
        'Led multiple team projects and presentations'
      ]
    },
    {
      id: 2,
      degree: 'Full Stack .NET & Angular Professional Diploma',
      institution: 'Information Technology Institute (ITI)',
      period: 'May 2024 – Sep 2024',
      location: 'Egypt',
      grade: 'Completed',
      description: 'Intensive 4-month professional training program covering full-stack development with .NET Core and Angular.',
      achievements: [
        'Mastered ASP.NET Core Web API development',
        'Built responsive web applications with Angular',
        'Implemented database design with Entity Framework',
        'Learned modern development practices and tools'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Web Development Fundamentals',
      issuer: 'NTI Scholarships',
      date: '2023',
      credentialId: 'NTI-WD-2023'
    },
    {
      name: 'Web Design Principles',
      issuer: 'NTI Scholarships',
      date: '2023',
      credentialId: 'NTI-WD-2023'
    },
    {
      name: 'Angular Fundamentals',
      issuer: 'Self-Learning',
      date: '2023',
      credentialId: 'N/A'
    },
    {
      name: '.NET Core Development',
      issuer: 'Self-Learning',
      date: '2023',
      credentialId: 'N/A'
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mr-3">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border-l-4 border-blue-600"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-2 md:mb-0">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <FiAward className="w-4 h-4 mr-1" />
                      {edu.grade}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg mr-3">
                <FiAward className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 p-4 rounded-lg border border-green-200 dark:border-green-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Issued by {cert.issuer}
                  </p>
                  {cert.credentialId !== 'N/A' && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700"
            >
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Continuous Learning:</strong> I believe in continuous professional development
                and regularly update my skills through online courses, workshops, and hands-on projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
