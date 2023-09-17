import React from 'react';
import "./About.css";



const About = () => {
  return (
    <div className='about-container' id="about">
      <div className='about-text'>
        <div className="about-me-header">
          <h1>About <span>Me</span></h1>
        </div>
        <div className='about-me-description'>
          <h3> Hi! I'm a web developer from Pampanga, Philippines with a passion for creating pleasing and useful web applications. 
          </h3>
        </div>
      </div>
      
      <div className='techstack-container'>
        <div className="techstack-text">
          <h1>Tech <span>Stack</span></h1>
        </div>
            <div className="techstack-icons">
              <div className="techstack-icon">
                <img src="/images/html5-icon.png" alt="TechStack" className='techstack-image'/>
                <img src="/images/CSS-icon.png" alt="TechStack" className='techstack-image'/>
                <img src="/images/JS-icon.png" alt="TechStack" className='techstack-image'/>
                <img src="/images/React-icon.png" alt="Techstack" className='techstack-image'/>
             </div>
          </div>
        </div>
    </div>
  )
}

export default About;
