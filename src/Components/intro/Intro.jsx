import React from 'react'
import './intro.css'
import bg from '../../assets/img.jpg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll'

const Intro = () => {
    return(
        <section id="intro">    
            <div className="introContent">
             <span className="hello">Hello,</span>
             <span className="introText">I'm <span className="introName">Hadi</span> <br />Frontend Developer</span>
             <p className="introPara">I am a a skilled Front end developer with experience in implementing,<br/> design into fully responsive projects</p>
             <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
             </div>
             <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}
export default Intro;