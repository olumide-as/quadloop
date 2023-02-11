import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import {Details} from '../../Components';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  


  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u73n05z', 'quadloop', form.current, 'ltE6PX_Fl9Gs-dMJo')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
      }, (error) => {
          console.log(error.text);
          toast.error("there's an error");
          


      });
      e.target.reset()
  };



  return (
    <div className='content__padding qualoop__contact' id='contact'>
      <div className='quadloop__contact_content'>
        <div className='quadloop__contact_01'> 
          <h2>Get in Touch</h2> 
        </div>
        <ToastContainer />

        
        <div className='quadloop__contact_02'>
          <div className='quadloop__contact_content__form'>  
          <form ref={form} onSubmit={sendEmail}>
      
        <div className='form50'>
        <div className="quadloop__contact_content__form_field">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className=""
            required
          />
        </div>

        <div className="quadloop__contact_content__form_field">
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className=""
            required
          />
        </div>
        </div>

        <div className="quadloop__contact_content__form_field">
          <textarea
            placeholder="Your message"
            name="message"
            className=""
            required
          />
        </div>

        <div className="quadloop__contact_content__form_field">
          <button
            className=""
            type="submit"
          >
            Send
          </button>
        </div>

        </form>
          </div>

          <div className='quadloop__contact_content__details'>
            <a href="https://www.google.com/maps/place/QuadLoop/@6.499162,3.3771986,17z/data=!3m1!4b1!4m5!3m4!1s0x103bede75f4c5e8d:0xa1cb0afbdb0b306e!8m2!3d6.4991567!4d3.3793873" target="_blank" rel="noopener noreferrer"><Details brand={<AiOutlineHome/>} details="10 Hughes Avenue Alagomeji Yaba"/></a>
            <a href="tel:+2348160925033"><Details brand={<AiOutlinePhone/>} details="+ 234 802 946 3826"/></a>
            <a href="mailto:hello@quadloop.africa"><Details brand={<AiOutlineMail/>} details="hello@quadloop.africa"/></a>
          </div>

       </div>

      </div>
    </div>
  )
}

export default Contact