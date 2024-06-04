import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className="footer-container">
        <p>© Lionel Natividad 2024 </p>
            <div className="socials">
                <a href="https://github.com/lionelkvn"><img className="socials-icon"src="./images/github.png" alt="github-logo" /></a>
                <a href="https://www.messenger.com/t/100000136477401/"><img className='socials-icon' src="./images/messenger.png" alt="x-logo" /></a>
                <a href="https://www.facebook.com/lionel.natividad/"><img src="./images/facebook.png" className='socials-icon' alt="" /></a>
                <p>+63 906 351 9099</p>
            </div>
        </div>
        




    </div>
  )
}

export default Footer