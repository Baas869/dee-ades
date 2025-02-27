import React from 'react'
import Hero from '../components/Hero';
import AboutPage from '../pages/About';
import FeaturedJalabias from '../components/Features';
import ContactPage from './Contact';
import Divider from '../components/Divider';

function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <div className="pt-16">
        <AboutPage />
      </div>

      <Divider /> 

      {/* Featured Jalabias Section */}
      <FeaturedJalabias />   

      <Divider /> 

      {/* Contact Section */}
      <ContactPage />      
    </div>
  )
}

export default Home