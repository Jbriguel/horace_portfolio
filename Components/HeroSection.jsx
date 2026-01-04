import React from 'react'
import { motion } from 'framer-motion'
import portfolioData from '../data/portfolio-data'

const HeroSection = () => {
  const { profile, hero } = portfolioData

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-[100svh] flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.2, 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#04041a] mb-4 sm:mb-6"
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.4, 
                duration: 0.6,
                type: "spring",
                stiffness: 120
              }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-3 sm:mb-4"
            >
              {profile.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6, 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.8, 
                duration: 0.5,
                type: "spring",
                stiffness: 150
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(4, 4, 26, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-6 sm:px-8 py-3 bg-[#04041a] text-white font-semibold rounded-lg hover:bg-[#04041a]/90 transition-all duration-300 text-sm sm:text-base"
              >
                {hero.cta1}
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#ffb600",
                  color: "#ffb600",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-6 sm:px-8 py-3 border-2 border-[#04041a] text-[#04041a] font-semibold rounded-lg hover:bg-[#04041a] hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                {hero.cta2}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.2 + index * 0.1, 
                    duration: 0.5,
                    type: "spring"
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center cursor-pointer"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04041a] mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              type: "spring",
              stiffness: 80
            }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              <div className="w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[#ffb600] p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-[#04041a] rounded-full items-center justify-center text-white text-4xl sm:text-6xl font-bold">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-[#04041a] rounded-full opacity-20"
              />
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  x: [-5, 5, -5],
                  scale: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ffb600] rounded-full opacity-20"
              />
              <motion.div
                animate={{ 
                  rotate: [0, -360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-[#ffb600] rounded-full opacity-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection