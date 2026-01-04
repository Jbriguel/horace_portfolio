import React from 'react'
import { motion } from 'framer-motion'
import portfolioData from '../data/portfolio-data'

const TechnologiesSection = () => {
  const { technologies } = portfolioData

  const designSkills = [
    { name: 'Figma', label: 'Fg', bg: '#0ACF83', fg: '#0b1f2a' },
    { name: 'Photoshop', label: 'Ps', bg: '#31A8FF', fg: '#0b1f2a' },
    { name: 'Illustrator', label: 'Ai', bg: '#FF9A00', fg: '#0b1f2a' },
    { name: 'After Effects', label: 'Ae', bg: '#9999FF', fg: '#0b1f2a' },
    { name: 'Adobe XD', label: 'Xd', bg: '#FF61F6', fg: '#0b1f2a' },
    { name: 'Lightroom', label: 'Lr', bg: '#001E36', fg: '#FFFFFF' },
  ]

  const techSkills = [
    { name: 'HTML5', label: 'HTML', bg: '#E34F26', fg: '#FFFFFF' },
    { name: 'CSS3', label: 'CSS', bg: '#1572B6', fg: '#FFFFFF' },
    { name: 'JavaScript', label: 'JS', bg: '#F7DF1E', fg: '#0b1f2a' },
    { name: 'React', label: 'React', bg: '#61DAFB', fg: '#0b1f2a' },
    { name: 'Node.js', label: 'Node', bg: '#339933', fg: '#0b1f2a' },
    { name: 'Tailwind CSS', label: 'TW', bg: '#38BDF8', fg: '#0b1f2a' },
  ]

  const expertises = [
    {
      title: "Identité Visuelle",
      description: "Création de chartes graphiques complètes qui captent l'essence unique de votre marque.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "UI/UX Design", 
      description: "Design d'interfaces utilisateur intuitives et d'expériences digitales captivantes.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
        </svg>
      )
    },
    {
      title: "Design d'Applications",
      description: "Conception d'interfaces mobiles élégantes et intuitives pour iOS et Android.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="technologies" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#04041a]">
      <div className="max-w-7xl mx-auto">

        {/* Expertises Grid */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-12 sm:mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Mes Expertises
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Solutions visuelles sur mesure pour votre identité de marque. Je transforme vos idées en créations percutantes qui marquent les esprits.
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              À travers une approche centrée sur l'utilisateur, je crée des designs qui racontent une histoire et créent un impact durable pour votre marque.
            </p>
            
            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#ffb600] mb-1">6+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Années d'Expérience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#ffb600] mb-1">100+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Projets Réalisés</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#projects')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-6 sm:px-8 py-3 border-2 border-[#ffb600] text-[#ffb600] font-semibold rounded-lg hover:bg-[#ffb600] hover:text-[#04041a] transition-all duration-300 text-sm sm:text-base"
            >
              Voir mes projets
            </motion.button>
          </motion.div>

          {/* Right Content - Expertises Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {expertises.map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#ffb600]/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ffb600]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-[#ffb600]">
                      {expertise.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#ffb600] font-bold text-base sm:text-lg mb-2">
                      {expertise.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {expertise.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-10"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#ffb600]/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ffb600]/30 bg-[#ffb600]/10 px-3 py-1 text-[11px] sm:text-xs text-[#ffb600]">
                Stack & outils
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
              Mes Compétences
            </h3>
            <p className="text-sm sm:text-base text-gray-300 text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
              Logos des technologies et logiciels que j’utilise au quotidien.
            </p>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Compétences Design */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">
                Compétences Design
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {designSkills.map((s) => (
                  <motion.div key={s.name} whileHover={{ y: -6, scale: 1.03 }} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-bold shadow-sm ring-1 ring-white/10"
                      style={{ backgroundColor: s.bg, color: s.fg }}
                      aria-hidden="true"
                    >
                      <span className="text-xs sm:text-sm tracking-wide">{s.label}</span>
                    </div>
                    <span className="mt-2 text-[11px] sm:text-xs text-white/80 text-center">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Compétences Techniques */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">
                Compétences Techniques
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {techSkills.map((s) => (
                  <motion.div key={s.name} whileHover={{ y: -6, scale: 1.03 }} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-bold shadow-sm ring-1 ring-white/10"
                      style={{ backgroundColor: s.bg, color: s.fg }}
                      aria-hidden="true"
                    >
                      <span className="text-xs sm:text-sm tracking-wide">{s.label}</span>
                    </div>
                    <span className="mt-2 text-[11px] sm:text-xs text-white/80 text-center">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default TechnologiesSection