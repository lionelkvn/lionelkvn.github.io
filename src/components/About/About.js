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
          <h4> Hi! I'm a web developer from Pampanga, Philippines with a passion for creating pleasing and useful web applications. 
          </h4>
          <br />
          <p>
          My story isn't your usual "I always knew I wanted to code" narrative. Instead, it all started with the discovery that I could modify firmware my 3D printers at home. This newfound power fascinated me because it meant I could take my imaginative ideas and turn them into real, tangible objects. The experience felt like magic!
          </p>
          <br />
          <p> This fascination with tinkering led into a deeper interest in coding and creating into the digital realm. I realized that the principles behind modifying software that runs my printers and web development has a lot more common than I thought. Both involved problem-solving, logic, and a little bit of creativity. 
          </p>
          <br />
          <p>I dove into web development, embracing the challenge of learning and solving problems. Creating digital experiences became one of my pasions, just as I had love tinkering.I'm here to connect with fellow thinkers and share my journey, Let's explore this digital realm together and turn  creative ideas into reality.
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
