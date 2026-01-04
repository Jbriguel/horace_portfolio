import React, { useState } from 'react'
import { motion } from 'framer-motion'
import portfolioData from '../data/portfolio-data'

const ContactSection = () => {
  const { contact, profile } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const phoneHref = profile.phone ? `tel:${profile.phone.replace(/\s+/g, '')}` : undefined

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#04041a]">
            Contactez-moi
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Prêt à démarrer votre prochain projet ? Discutons ensemble de la façon dont nous pouvons transformer vos idées en réalité digitale.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              type: "spring",
              stiffness: 120
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="w-16 h-16 bg-[#04041a] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffb600] transition-colors duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: 5
              }}
            >
              <motion.svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </motion.svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-[#04041a] mb-2 group-hover:text-[#ffb600] transition-colors duration-300">Email</h3>
            <p className="text-sm sm:text-base text-gray-600 break-all">{profile.email}</p>
          </motion.div>

          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 120
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="w-16 h-16 bg-[#04041a] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffb600] transition-colors duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: -5
              }}
            >
              <motion.svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </motion.svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-[#04041a] mb-2 group-hover:text-[#ffb600] transition-colors duration-300">Téléphone</h3>
            {phoneHref ? (
              <a className="text-sm sm:text-base text-gray-600 hover:text-[#ffb600] transition-colors duration-300" href={phoneHref}>
                {profile.phone}
              </a>
            ) : (
              <p className="text-sm sm:text-base text-gray-600">{profile.phone}</p>
            )}
          </motion.div>

          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              type: "spring",
              stiffness: 120
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="w-16 h-16 bg-[#ffb600] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#04041a] transition-colors duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: 5
              }}
            >
              <motion.svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </motion.svg>
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-[#04041a] mb-2 group-hover:text-[#ffb600] transition-colors duration-300">Localisation</h3>
            <p className="text-sm sm:text-base text-gray-600">{profile.location}</p>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 80
          }}
          viewport={{ once: true }}
          className="bg-[#04041a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 lg:mb-20 relative overflow-hidden"
        >
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #ffb600 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #ffb600 0%, transparent 50%)",
                "radial-gradient(circle at 40% 50%, #ffb600 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-center">
              Envoyez-moi un message
            </h2>
            <p className="text-sm sm:text-base text-gray-300 text-center mb-6 sm:mb-8">
              Décrivez votre projet et je vous recontacterai rapidement
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffb600] transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffb600] transition-colors duration-300 text-sm sm:text-base"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>

              <div>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-[#ffb600] transition-colors duration-300 text-sm sm:text-base"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" className="bg-gray-800 text-white">Type de projet</option>
                  <option value="Identité visuelle" className="bg-gray-800 text-white">Identité visuelle</option>
                  <option value="Site web" className="bg-gray-800 text-white">Site web</option>
                  <option value="Application mobile" className="bg-gray-800 text-white">Application mobile</option>
                  <option value="UX/UI Design" className="bg-gray-800 text-white">UX/UI Design</option>
                  <option value="Autre" className="bg-gray-800 text-white">Autre</option>
                </select>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/50 border-2 border-gray-700/50 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffb600] transition-colors duration-300 resize-none text-sm sm:text-base"
                  placeholder="Parlez-moi de votre projet, vos délais et vos exigences..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 182, 0, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#ffb600] text-[#04041a] font-semibold rounded-lg sm:rounded-xl hover:bg-[#ffb600]/90 transition-all duration-300 text-sm sm:text-base relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">
                  Envoyer le message
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#04041a] mb-3 sm:mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            N'hésitez pas à me contacter pour discuter de votre projet. Je vous réponds rapidement avec une proposition personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(4, 4, 26, 0.3)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#04041a] text-white font-semibold rounded-lg sm:rounded-xl hover:bg-[#04041a]/90 transition-all duration-300 text-sm sm:text-base relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-[#ffb600]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Envoyer un email</span>
            </motion.a>
            {phoneHref && (
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 182, 0, 0.3)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                href={phoneHref}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#ffb600] text-white font-semibold rounded-lg sm:rounded-xl hover:bg-[#ffb600]/90 transition-all duration-300 text-sm sm:text-base relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-[#04041a]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative z-10">Appeler maintenant</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection