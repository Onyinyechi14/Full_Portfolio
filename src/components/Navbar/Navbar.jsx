import React, {useState, useRef} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import about from '../../assets/about.png'

const Navbar = () => {

const[menu,setMenu] = useState("home");
const menuRef = useRef();

const openMenu = () => {
    menuRef.current.style.right='0'
}

const closeMenu = () => {
    menuRef.current.style.right='-350px'
}

  return (
    <div className='navbar'>
    <p>Onyinyechi</p>
    <FontAwesomeIcon icon={faBars} onClick={openMenu} size="2x" className='nav-mob-open' />
    <ul ref={menuRef} className='nav-menu'>
    <FontAwesomeIcon icon={faTimes} onClick={closeMenu} size="1x" className='nav-mob-close' />
      <li><a className='anchor-link'  href='#home'><p onClick={()=>setMenu('home')}>Home</p></a>{menu==="home"?<img src={about} alt=''/>:<></>}</li>
      <li><a className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></a>{menu==="about"?<img src={about} alt=''/>:<></>}</li>
      <li><a className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></a>{menu==="services"?<img src={about} alt=''/>:<></>}</li>
      <li><a className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu('work')}>Portfolio</p></a>{menu==="work"?<img src={about} alt=''/>:<></>}</li>
      <li><a className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></a>{menu==="contact"?<img src={about} alt=''/>:<></>}</li>
    </ul>
    <div className='nav-connect'><a className='anchor-link' offset={50} href='#contact'>Connect With Me</a></div>
    </div>
  )
}

export default Navbar