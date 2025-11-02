import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import ProjectsSection from '../Components/ProjectsSection'
import TechnologiesSection from '../Components/TechnologiesSection'
import FAQSection from '../Components/FAQSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'
import DynamicThreeBackground from '../Components/DynamicThreeBackground'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* 3D Background */}
      <DynamicThreeBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <TechnologiesSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home