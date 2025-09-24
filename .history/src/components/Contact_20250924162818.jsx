import { useGSAP } from '@gsap/react'
import { openingHours, socials } from '../../constants'

const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', 
            {}')
    })
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

                <div className='flex-center gap-5'>
                    {socials.map((item) => (
                        <a key={item.name} href={item.url} target='_blank' rel='noopener noreferrer' aria-label={item.name}>
                            <img src={item.icon} alt={item.name} />
                        </a>
                    ))}
                </div>
             </div>
        </div>
    </footer>
  )
}

export default Contact