import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import About from '../components/About/About'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
    </div>
  )
}

export default Homepage