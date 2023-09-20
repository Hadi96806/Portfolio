import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
    return (
        <section id='skills'>
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I'm a passionate junior frontend developer with a flair for crafting elegant and user-centric web experiences. I'm deeply committed to turning creative ideas into interactive and visually appealing websites. My journey in web development has been driven by a thirst for knowledge, a love for clean code, and a dedication to continuous growth. I'm excited to contribute my skills to projects that push the boundaries of design and technology, all while staying curious and eager to learn from every coding challenge.</span>
        <div className="skillBars">
            <div className="skillBar">
              <img src={UIDesign} alt="Frontend" className="skillBarImg" />
              <div className="skillBarText">
                  <h2>Front-end Development</h2>
                  <p>I specialize in front-end development, where I bring creative designs to life with clean and interactive user interfaces.</p>
              </div>
            </div>  
            <div className="skillBar">
              <img src={WebDesign} alt="Backend" className="skillBarImg" />
              <div className="skillBarText">
                  <h2>Back-end Development</h2>
                  <p>I have a strong foundation in back-end development, ensuring that web applications run smoothly, securely, and efficiently behind the scenes.</p>
              </div>
            </div>  
            <div className="skillBar">
              <img src={AppDesign} alt="JAVA GUI" className="skillBarImg" />
              <div className="skillBarText">
                  <h2>JAVA GUI</h2>
                  <p>My expertise extends to creating Java GUI applications, providing intuitive and user-friendly interfaces for desktop software solutions.</p>
              </div>
            </div>  
        </div>   
        </section>
    )
}
export default Skills;