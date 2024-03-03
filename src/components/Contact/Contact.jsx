import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container container">
        <div className="contact-img">
          <img src="https://media.istockphoto.com/id/1365544413/video/contact-us-concept.jpg?s=640x640&k=20&c=a6o5RVk_pVTjL_YXzFQYSa76PahdhH7OLCLdv3iel_I=" alt="" />
        </div>

        <div className="form-container">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-Mail" />
          <textarea
            cols="30"
            rows="6"
            placeholder="Type Your Message"
          ></textarea>
          <a href="#" className="btn btn-primary">Submit</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
