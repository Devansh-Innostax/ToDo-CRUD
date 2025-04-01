import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <section className='flex flex-col gap-10'>
      <Navbar />
      <HeroSection />
      <Footer />
    </section >
  )
}

export default App