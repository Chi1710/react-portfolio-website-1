import React from 'react'
import "./contact.css";
import {MdAlternateEmail} from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pagp48o', 'template_00bxuw2', form.current, 'Neacr8f7nd2kFcTIe')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contect Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdAlternateEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>chiyantsestudio@gmail.com</h5>
            <a href='mailto:chiyantsestudio@gmail.com' alt='Chiyan Tse email'>Send a Message</a>
          </article>
          
        </div>
        {/* END OF CONTACCT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact;