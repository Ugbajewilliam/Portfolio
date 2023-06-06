import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_349kh4a', 'template_9z0arkx', form.current, 'ann0kLLTAiTIX0NK5')
     e.target.reset();
  };
  return (
    <section id='contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>


  <div className='container contact__container'>
<div className='contact__options'>
  <article className='contact__option'>
  <AiOutlineMail/>
<h4>Email:</h4>
<h5>Ugbajewilliam@gmail.com</h5>
<a href='mailto:ugbajewilliam@gmail.com' target='blank'>Send a Message</a>
  </article>

  <article  className='contact__option'>
  <FaTwitterSquare/>
<h4>Twitter</h4>
<a href='https://twitter.com/ugbajewilliams' target='blank'>Send a Message</a>
  </article>

  <article  className='contact__option'>
  <BsWhatsapp/>
<h4>Whatsapp:</h4>
<h5>+2348111427303</h5>
<a href='https://api.whatsapp.com/send?phone+2348111427303' target='blank'>Send a Message</a>
  </article>
</div>
{/* END OF CONTACT OPTIONS */}
<form ref={form} onSubmit={sendEmail}>
<input type='text' name='name' placeholder='Your Full Name' required/>
<input type='email' name='email' placeholder='Your Email' required/>
<textarea name='message' rows='7' placeholder='Your Message' required/>
<button type='submit' className='button'>Send Message</button>
</form>
  </div>
    </section>
  )
}

export default Contact