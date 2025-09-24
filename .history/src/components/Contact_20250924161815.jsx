import React from 'react'
import { openingHours } from '../constants'

const Contact = () => {
  return (
    <footer id="contact">
        <img src="/images/footer-left-leaf.png" alt="left-leaf" id="f-left-leaf" />
        <img src="/images/footer-right-leaf.png" alt="right-leaf" id="f-right-leaf" />
        
        <div className="content">
            <h2>Where to Find Us</h2>
             
             <div>
                <h3>Visit Our Bar</h3>
                <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
             </div>

             <div>
                <h3>Contact Us</h3>
                <p>(555) 987-6543</p>
                <p>hello@jsmcocktail.com</p>
             </div>

             <div>
                <h3>Open Every Day</h3>
                {openingHours.map((item, index) => (
                    <p key={index}>{item.day} - {item.time}</p>
                ))}
             </div>

             <div>
                <h3>Socials</h3>
                
             </div>
        </div>
    </footer>
  )
}

export default Contact