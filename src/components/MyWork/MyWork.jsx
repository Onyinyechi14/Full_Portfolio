import React from 'react'
import './MyWork.css'
import about from '../../assets/about.png'
import mywork_data from '../../assets/mywork_data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




const MyWork = () => {
  return (
    <div id='work' className='mywork'>
<div className="mywork-title">
    <h1>My latest work</h1>
    <img src={about} alt="" />
</div>
<div className="mywork-container">
    {mywork_data.map((work,index)=>{
        return <a key={index} href={work.w_ref} target="_blank" rel="noopener noreferrer"> <img src={work.w_img} alt='' /></a>
    })}
</div>

    <a href="https://traveleasy-3lsn.onrender.com/" target="_blank" rel="noopener noreferrer">
      <div className="mywork-showmore">
       <p> Show More</p>
         <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </a>
  </div>
  )
}

export default MyWork