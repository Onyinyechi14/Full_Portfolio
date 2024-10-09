import React from 'react'
import './Contact.css'
import about from '../../assets/about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {



    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "15a1f518-7867-419c-b81a-0fa6c4e8a348");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        };
      };


  return (
    <div id='contact' className='contact'>
    <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={about} alt="" />
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me message about anything that you want me to work on. You can contact anytime </p>
            <div className="contact-details">
                <div className="contact-detail">
                <FontAwesomeIcon icon={faEnvelope} /> <p>giftjulius070@gmail.com</p>
                </div>
                <div className="contact-detail">
                <FontAwesomeIcon icon={faPhone} /> <p>+234-706-594-8309</p>
                </div>
                <div className="contact-detail">
                <FontAwesomeIcon icon={faLocationDot} /> <p>Lagos, Nigeria</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
    </div>
    </div>
  )
}

export default Contact