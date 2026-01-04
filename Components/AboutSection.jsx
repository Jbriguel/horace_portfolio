import React from 'react'
import { motion } from 'framer-motion'
import portfolioData from '../data/portfolio-data'

const AboutSection = () => {
  const { about } = portfolioData

  const services = [
    {
      icon: "🎨",
      title: "DESIGN GRAPHIQUE",
      subtitle: "Création visuelle"
    },
    {
      icon: "🎯",
      title: "IDENTITÉ VISUELLE", 
      subtitle: "Branding unique"
    },
    {
      icon: "✏️",
      title: "DESIGN D'INTERFACE",
      subtitle: "UI/UX Design"
    },
    {
      icon: "🎭",
      title: "DIRECTION ARTISTIQUE",
      subtitle: "Conseil créatif"
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#04041a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {about.title}
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {about.description}
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              À travers une approche centrée sur l'utilisateur, je transforme des idées en 
              designs percutants qui racontent une histoire et créent un impact durable.
            </p>
            
            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-[#ffb600] mb-1">100+</div>
                <div className="text-gray-400 text-sm">Projets Design</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#ffb600] mb-1">5+</div>
                <div className="text-gray-400 text-sm">Marques Accompagnées</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-3 border-2 border-[#ffb600] text-[#ffb600] font-semibold rounded-lg hover:bg-[#ffb600] hover:text-[#04041a] transition-all duration-300"
            >
              En savoir plus
            </motion.button>
          </motion.div>

          {/* Right Content - Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-[#ffb600]/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-[#ffb600] font-bold text-sm mb-2 tracking-wider">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection