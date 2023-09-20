import React from 'react'
import './navbar.css'
import ContactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
function Navbar()
{
   return(
    <nav className="navbar">
          <img src="src\assets\logo.png" alt="LOGO" className='logo'/>
          <div className="desktopMenu">
            <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to ='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact Me</Link>

          </div>
          <button className="desktopMenuBtn">
          <img src={ContactImg} alt="Img" className="desktopMenuImg" />Contact Me</button>
    </nav>

   )
}
export default Navbar