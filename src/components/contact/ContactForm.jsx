import React from 'react'
import './contact.css'

const ContactForm = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13253.235079307944!2d35.51291961860264!3d33.855932559609386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1669056926712!5m2!1sen!2slb" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
    <section className='contact'>
        <div className="container">
            <div className="contact-content">
                <iframe src={map} frameborder="0"></iframe>
            
            <div className="contact-items">
                <h2>Contact us</h2>
                <p>we're open for any suggestion or just to have a chat</p>
                <div className="aep">
                    <div className='first0'>
                    <h4>ADDRESS :</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className='second'>
                    <h4>Email :</h4>
                    <p>info@mail.com</p>
                    </div>
                    <div>
                    <h4>PHONE :</h4>
                    <p>+12345678</p>
                    </div>
                </div>
                <div className="ne">
                    <input type="text" placeholder='Name'/>
                    <input className='email' type="email" placeholder='Email'/>
                </div>
                <input type="text" name="" id="" placeholder='Subject' />
                <textarea name="" id="" cols="30" rows="10" placeholder='create a message here...'></textarea>
                <button className='send'>Send Message</button>
            </div>
        </div>
        </div>
    </section>
      
    </>
  )
}

export default ContactForm
