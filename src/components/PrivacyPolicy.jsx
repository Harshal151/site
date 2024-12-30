import React from 'react';
import NewNavBar from './NewNavBar';
import './css/PrivacyPolicy.css';

const PrivacyPolicy = () => (
  <>
    <NewNavBar />
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p className="intro-text">
        Purity Technology Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our applications, including the CRM app, Fitness app, and Food Delivery app.
      </p>
      
      <div className="section">
        <h4>1. Information We Collect</h4>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other information provided during account registration.</li>
          <li><strong>Usage Data:</strong> Information about how you use our apps, including activity logs, preferences, and interactions.</li>
          <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system.</li>
          <li><strong>Location Data:</strong> If enabled, location information may be collected to improve app functionalities (e.g., for food delivery).</li>
        </ul>
      </div>

      <div className="section">
        <h4>2. How We Use Your Information</h4>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To personalize user experiences and improve app performance.</li>
          <li>To communicate with you regarding updates, promotions, or technical support.</li>
          <li>To analyze trends and improve app functionalities.</li>
        </ul>
      </div>

      <div className="section">
        <h4>3. Sharing Your Information</h4>
        <ul>
          <li>We do not sell your personal data.</li>
          <li>Information may be shared with third-party service providers to facilitate app functionality (e.g., payment processors, cloud storage).</li>
          <li>We may disclose information if required by law or to protect the rights and safety of users.</li>
        </ul>
      </div>

      <div className="section">
        <h4>4. Data Retention</h4>
        <ul>
          <li>We retain your data for as long as necessary to provide our services or comply with legal obligations.</li>
          <li>You may request the deletion of your data by contacting us at <strong>support@puritytechsolutions.com</strong>.</li>
        </ul>
      </div>

      <div className="section">
        <h4>5. Cookies and Tracking Technologies</h4>
        <ul>
          <li>We use cookies and similar technologies to enhance user experience and collect usage data.</li>
          <li>You can control cookie settings through your browser.</li>
        </ul>
      </div>

      <div className="section">
        <h4>6. Data Security</h4>
        <ul>
          <li>We use encryption and other security measures to protect your data.</li>
          <li>While we strive to protect your information, no method of transmission over the internet is 100% secure.</li>
        </ul>
      </div>

      <div className="section">
        <h4>7. Your Rights</h4>
        <ul>
          <li>Access, update, or delete your personal information by contacting us at <strong>support@puritytechsolutions.com</strong>.</li>
          <li>Opt-out of promotional communications through the provided links or by contacting us.</li>
        </ul>
      </div>

      <div className="section">
        <h4>8. Third-Party Links</h4>
        <ul>
          <li>Our apps may contain links to third-party websites or services. We are not responsible for their privacy practices.</li>
        </ul>
      </div>

      <div className="section">
        <h4>9. Children’s Privacy</h4>
        <ul>
          <li>Our apps are not intended for users under the age of 13. We do not knowingly collect information from children.</li>
        </ul>
      </div>

      <div className="section">
        <h4>10. Changes to This Privacy Policy</h4>
        <ul>
          <li>We may update this policy periodically. Significant changes will be communicated to users.</li>
        </ul>
      </div>

      <div className="section">
        <h4>11. Contact Us</h4>
        <ul>
          <li>If you have questions about this Privacy Policy, please contact us at <strong>support@puritytechsolutions.com</strong>.</li>
        </ul>
      </div>

      <p className="consent-text">By using our apps, you consent to the practices described in this Privacy Policy.</p>
    </div>
  </>
);

export default PrivacyPolicy;
