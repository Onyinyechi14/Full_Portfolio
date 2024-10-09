import React from 'react'
import './Services.css'
import pro from '../../assets/about.png'
import Services_Data from '../../assets/services_data.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




const Services = () => {
  return (
    <div id='services' className='services'>
     <div className="services-title">
        <h1>My Services</h1>
        <img src={pro} alt="" />
     </div>
     <div className="services-container">
       {Services_Data.map((service,index)=>{
        return <div key={index} className='services-format'>
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>
          <div className='services-readmore'></div>
          <p> <FontAwesomeIcon icon={faArrowRight} /> Read More</p>
          <h1> </h1>
        </div>
       })}
     </div>
    </div>
  )
}

export default Services