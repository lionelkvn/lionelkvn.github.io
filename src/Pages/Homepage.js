import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
    </div>
  )
}

export default Homepage