import React, { useState } from 'react'
import { motion } from 'framer-motion'
import portfolioData from '../data/portfolio-data'

const ProjectsSection = () => {
  const { projects } = portfolioData
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', ...new Set(projects.map(project => project.category))]
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const openProject = (project) => {
    const url = project?.links?.demo || project?.links?.youtube || project?.links?.docs
    if (!url) return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-[#04041a]">
              Réalisations Créatives
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Découvrez mes derniers projets de design, des identités visuelles aux interfaces utilisateur innovantes.
          </p>

          {/* Category Filter */}
          <div className="flex sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0 no-scrollbar">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * categories.indexOf(category) }}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#04041a] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              onClick={() => openProject(project)}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#ffb600] transition-all duration-300 shadow-sm group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 bg-gray-100 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-[#04041a]/0 group-hover:bg-[#04041a]/10 transition-all duration-300 z-10"
                  whileHover={{ opacity: 1 }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full bg-[#04041a] items-center justify-center text-white text-2xl font-bold">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.span 
                    className="px-3 py-1 bg-white/90 text-[#04041a] text-sm font-medium rounded-full shadow-sm"
                    whileHover={{ scale: 1.1, backgroundColor: "#ffb600", color: "white" }}
                  >
                    {project.category}
                  </motion.span>
                </motion.div>
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#04041a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    className="px-4 py-2 bg-[#ffb600] text-white rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      openProject(project)
                    }}
                  >
                    Voir le projet
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Content */}
              <motion.div 
                className="p-4 sm:p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-[#04041a] mb-2 sm:mb-3 line-clamp-2"
                  whileHover={{ color: "#ffb600" }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies?.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      whileHover={{ 
                        backgroundColor: "#ffb600", 
                        color: "white",
                        scale: 1.05
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
            Intéressé par une collaboration sur votre prochain projet créatif ?
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(4, 4, 26, 0.3)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-6 sm:px-8 py-3 bg-[#04041a] text-white font-semibold rounded-lg hover:bg-[#04041a]/90 transition-all duration-300 text-sm sm:text-base relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[#ffb600]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">
              Démarrer un projet
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection