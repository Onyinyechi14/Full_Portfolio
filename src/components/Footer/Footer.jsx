import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import onyinyechi from '../../assets/onyinyechi.png'


const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-top">
       <div className="footer-top-left">
        <h3>Onyinyechi</h3>
        <p>I am a full stack developer from Lagos, Nigeria that started off in the Tech industry</p>
       </div>
       <div className="footer-top-right">
        <div className="footer-email-input">
        <FontAwesomeIcon icon={faUser} />
        <input type="email" placeholder='Enter your emails' />
        </div>
        <div className="footer-subscribe">Subscribe</div>
       </div>
    </div>
    <hr />
    <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 Onyinyechi Julius-Okorie. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer