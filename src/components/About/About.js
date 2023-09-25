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
          <p> Hi! I'm a web developer from Pampanga, Philippines with a passion for creating pleasing and useful web applications. 
          </p>
          <p>
          My story isn't your usual "I always knew I wanted to code" narrative. Instead, it all started with the discovery that I could modify the software controlling my 3D printers at home. This newfound power fascinated me because it meant I could take my imaginative ideas and turn them into real, tangible objects. It felt like magic!
          </p>

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
