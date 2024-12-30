import React from 'react';
import './css/Footer.css';


const Footer = () => (
  <footer id="footer" className="footer">
    <div className="footer-content">
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          {/* <li><a href="/services">Services</a></li> */}
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/cancellation-policy">Cancellation Policy</a></li>

          
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>103 Guruvarya Chikane Guruji Residency, Kshetrapal Nagar</p>
        <p>Shivtar Road, Khed, Ratnagiri-415709, Maharashtra</p>
        <p><strong>Phone:</strong> +91 8149772397</p>
        <p><strong>Email:</strong> <a href="mailto:info@puritytechsolutions.in">info@puritytechsolutions.in</a></p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>Copyright © {new Date().getFullYear()} Purity Tech Solutions. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
