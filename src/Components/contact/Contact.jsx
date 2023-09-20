import React from "react";
import './contact.css'
const Contact = () =>{
    return(
        <section className="contactPage">
            
            <div id="contact">
                <h1 className="contactPageTitle">  </h1>
                <span className="contactDesc">Please fill out this form to discuss any work oppurtunties</span>
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder="Name"/>
                    <input type="email" className="email" placeholder="email" />
                    <textarea className="msg" name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                    <button type="submit" value='send' className="submitBtn">Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Contact