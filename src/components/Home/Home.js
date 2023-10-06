import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div id='Home' className='Home-container'>
        <div className='home-image'>
            <img src='/images/Home-img.jpg' alt="Home" />
        </div>
        <div className='home-text'>
            <h1>I'm Lionel, a front-end <span>Web Developer</span></h1>
            <h2>and I <span>create</span> and <span>build</span> things for the web.</h2>
            <br/>
              <div className='buttons'>
                <a href="mailto:lionel.natividad@gmail.com"><button><h3>Get in touch </h3></button></a>
                <a href='/pdfs/LIONEL_NATIVIDAD.pdf'><button><h3>my Résumé </h3></button> </a>
            </div>
        </div>
    
    </div>
  )
}

export default Home