import React from 'react';
import './Hero.css';
import sit from '../../assets/sit.jpeg'

const Hero = () => {

const handleClick = (e) => {
  e.preventDefault();
  const contactSection = document.getElementById('connect');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth'});
  }
};


  return (
    <div id='home' className='hero'>
        <img src={sit} alt="" />
        <h1><span>I'm Onyinyechi Julius Okorie,</span> MERN stack developer based in Nigeria</h1>
        <p>I am a full stack developer from Lagos, Nigeria that started off in the Tech industry</p>
        <div className="hero-action">
            <div className="hero-connect"><a className='anchor-link'  href='#contact' onClick={handleClick}>Connect With Me</a></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1BVeB4RkhwrelLHohboahzNRl62XzQxc_/view?usp=drive_link" target='_blank' rel='noopener noreferrer'>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero