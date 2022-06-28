import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const [formData,setFormData]=React.useState({  
    name:"",
    email:"",
    message:""
  })

  function handleChange(event){
    
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value

      }
    })
  }

  function validate(){
    var name=formData.name;
    var email=/\S+@\S+\.\S+/.test(formData.email);
    var message=formData.message;

    if(name.length > 0 && email===true && message.length >0){
      alert("Message Successfully Sent!")
    }
    else{
      alert("Something is missing. Check the fields again!")
    }
  }


const form =useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_89ku22v', 'template_3esiwya', form.current, 'user_aZTb8OZFySMJp4OKHSjPz')
    e.target.reset()


  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
<article className="contact__option">
  <MdOutlineEmail className="contact__option-icon"/>
  <h4>Email</h4>
  <h5>marcsss123@gmail.com</h5>
  <a href="mailto:marcsss123@gmail.com" target="_blank">Send a message</a>
</article>
<article className="contact__option">
  <RiMessengerLine className="contact__option-icon"/>
  <h4>Messenger</h4>
  <h5>Marc Ouba</h5>
  <a href="https://m.me/marc.ouba.58" target="_blank">Send a message</a>
</article>
<article className="contact__option">
  <BsWhatsapp className="contact__option-icon"/>
  <h4>WhatsApp</h4>
  <h5>+961 70 288 767</h5>
  <a href="https://wa.me/+96170288767" target="_blank">Send a message</a>
</article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
    <input id="name" type="text" name='name' placeholder='Your Full Name' value={formData.name} onChange={handleChange} required />
    <input id="email" type="email" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange}  required />
    <textarea id="message" name="message" rows="7" placeholder='Your Message' value={formData.message} onChange={handleChange} required></textarea>
        <button type='submit' onClick={validate} className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact