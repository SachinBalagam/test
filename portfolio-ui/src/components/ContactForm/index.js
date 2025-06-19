import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://contact-api-portfolio-5a2ad4000ccb.herokuapp.com/', formData);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <form className="contact-details-container" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className='inputs-container'>
              <div >
                <label>
                  <input className="contact-container" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                  <input className="contact-container" placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                  <input className="contact-container" placeholder="Phone Number" type="tel" name="number" value={formData.number} onChange={handleChange} />
                </label>
                <br />
              </div>
              <div>
                <textarea className="contact-container txt" placeholder="Message" name="message" value={formData.message} onChange={handleChange} />
              </div>
            </div>

            
          </div>
          <div className='bottom-btn-email-container'>
            <button type="submit" className="btn btn-color-1 button">Submit</button>
            <div class="email-container">
              <img
                src="./assets/email.png"
                alt="Email icon"
                class="icon contact-icon email-icon"
              />
              <p><a href="mailto:shivamekala001@gmail.com">shivamekala001@gmail.com</a></p>
            </div>
          </div>
        </form>
      </div>


      <nav className='footer'>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <p className='para'>Copyright &#169; 2023 Shiva Prasad M. All Rights Reserved.</p>
      </nav>
    </section>
  );
};

export default ContactForm;
