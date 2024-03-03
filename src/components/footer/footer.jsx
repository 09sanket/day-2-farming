import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container container">
        <div className="footer-left">
          <h2>Farming</h2>
          <p>"In the fields of farming, nature's artistry and human stewardship intertwine, nurturing life's abundance."</p>
        </div>
        <div className="footer-center">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/sanket-rahangdale708989/">Linkedin</a></li>
            <li><a href="https://09sanket.github.io/Portfolio-Updated/">Portfolio</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://github.com/">Github</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Contact Info</h2>
          <p>Ward number 05 Sitakhoh Blaghat MadhyaPradesh</p>
          <p>Email: sanketrahangdale1118@gmail.com</p>
          <p>Phone: 7089890044</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Farming. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
