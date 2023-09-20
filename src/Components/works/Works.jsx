import React from "react";
import './works.css';
import Portfolio1 from '../../assets/Portfolio-1.png';
import Portfolio2 from '../../assets/Portfolio-2.png';
import Portfolio3 from '../../assets/Portfolio-3.png';
import Portfolio4 from '../../assets/Portfolio-4.png';
import Portfolio5 from '../../assets/Portfolio-5.png';
import Portfolio6 from '../../assets/Portfolio-6.png';

const Works = () => {
    return(
        <section id='works'>
         <h2 className="workTitle"></h2>
         <span className="workDesc"></span>
         <div className="workImgs">
            <img src={Portfolio1} alt="Portfolio1" className="workImg" />
            <img src={Portfolio2} alt="Portfolio2" className="workImg" />
            <img src={Portfolio3} alt="Portfolio3" className="workImg" />
            <img src={Portfolio4} alt="Portfolio4" className="workImg" />
            <img src={Portfolio5} alt="Portfolio5" className="workImg" />
            <img src={Portfolio6} alt="Portfolio6" className="workImg" />
         </div>
         <button className="workBtn">See More</button>
        </section>
    )
}
export default Works