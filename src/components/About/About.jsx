import React from 'react'
import './About.css'
import prof from '../../assets/prof.jpeg';
import about from '../../assets/about.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={about} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={prof} alt="" className='prof-img'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a full stack developer from Lagos, Nigeria that started off in the Tech industry. Though a new career, l have worked on over 10 projects, open for collaboration and to improve in my skills.</p>
                    <p>My passion for innovative tech skill is reflected in my enthusiam and dedication l bring to each project. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr  style={{width: "70%"}}/> </div>
                    <div className="about-skill"><p>JavaScript</p> <hr  style={{width: "50%"}}/> </div>
                    <div className="about-skill"><p>React</p> <hr  style={{width: "60%"}}/> </div>
                    <div className="about-skill"><p>Nest JS</p> <hr  style={{width: "50%"}}/> </div>
                    <div className="about-skill"><p>NodeJS</p> <hr  style={{width: "70%"}}/> </div>
                    <div className="about-skill"><p>MongoDB</p> <hr  style={{width: "60%"}}/> </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>less than 1</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About