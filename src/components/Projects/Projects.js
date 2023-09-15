import React from 'react'
import './Projects.css'


const Projects = () => {
  return (
    <div className='projects-container'>
      <div className="projects-header">
        <h1 >My <span>Projects</span></h1>
      </div>

        
      <div className='projects-wrapper'>
        <div className="project-thumbnail">
          <a href='https://capstone-072823-git-master-lionelkvn.vercel.app/'> <img src='/Inknovative.jpg' alt="screenshot of inknovative website " className='project-photos' /> </a>
        </div>
        <div className='project-description'>
          <h3> Inknovative Portfolio Website</h3>
          <p>a portfolio website highlighting the projects of Inknovative, a premier graphic design firm in Cotabato, Philippines.
          </p>
          <br />
          <p> This website was our capstone project during our bootcamp at KodeGo.</p>
          <br/>
          <h4>Technologies used:</h4><p> HTML,CSS and Javascript</p>
          <h4>Framework:</h4><p>React</p>
          <a href="https://capstone-072823-git-master-lionelkvn.vercel.app/"><button>visit website</button></a>
          <a href="https://github.com/lionelkvn/capstone-072823.git"><button>code</button></a>
        </div>
  
        </div>
        
    </div>
    
  )
}

export default Projects