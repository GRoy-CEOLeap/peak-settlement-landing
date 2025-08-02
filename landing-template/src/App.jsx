import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import ProcessSection from './components/ProcessSection'
import EducationalContent from './components/EducationalContent'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <ProcessSection />
      <EducationalContent />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
