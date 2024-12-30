import React from 'react';
import NewNavBar from './NewNavBar';
import './css/TermsAndConditions.css';

const TermsAndConditions = () => (
  <>
    <NewNavBar />
    <div className="terms-and-conditions">
      <h1>Terms & Conditions</h1>
      <p>Please read these terms carefully before using our website.</p>
      <h2>1. Introduction</h2>
      <p>Purity Technology Solutions provides various applications to help businesses manage customers, fitness enthusiasts track progress, and streamline food delivery services.</p>
      <p>By using our apps, you accept these Terms.</p>

      <h2>2. Eligibility</h2>
      <p>Users must be at least 18 years old or have parental/guardian consent to use the services.</p>
      <p>By accessing our apps, you represent that you meet the eligibility requirements.</p>

      <h2>3. User Responsibilities</h2>
      <ul>
        <li>Users are responsible for maintaining accurate and updated information in the apps.</li>
        <li>Unauthorized access, sharing of login credentials, or misuse of the service is prohibited.</li>
        <li>Any unlawful activities using the apps are strictly forbidden.</li>
      </ul>

      <h2>4. Data Privacy</h2>
      <p>Purity Technology Solutions values your privacy. Please refer to our Privacy Policy for details on how we collect, use, and store your data.</p>
      <p>By using our apps, you consent to our data collection and usage practices.</p>

      <h2>5. Payment and Subscriptions</h2>
      <p>Some apps may have subscription fees or in-app purchases. Payment terms will be provided at the time of purchase.</p>
      <p>Refunds will be issued in accordance with our Refund Policy.</p>

      <h2>6. Intellectual Property</h2>
      <p>Purity Technology Solutions owns all intellectual property rights to the apps, logos, and associated content.</p>
      <p>Users retain ownership of their data uploaded to the apps but grant us a license to process and display it.</p>

      <h2>7. Service Availability and Modifications</h2>
      <p>We strive to maintain service availability but cannot guarantee uninterrupted access due to maintenance or unforeseen issues.</p>
      <p>Features and functionalities may change over time.</p>

      <h2>8. Limitation of Liability</h2>
      <p>Purity Technology Solutions is not liable for any indirect or consequential damages resulting from the use or inability to use our apps.</p>
      <p>Users are responsible for any third-party interactions or transactions facilitated through the apps.</p>

      <h2>9. Termination</h2>
      <p>We reserve the right to suspend or terminate user accounts for violations of these Terms or misuse of our services.</p>
      <p>Users may terminate their accounts at any time.</p>

      <h2>10. Governing Law</h2>
      <p>These Terms are governed by the laws of [Your Jurisdiction].</p>

      <h2>11. Changes to Terms</h2>
      <p>We may update these Terms periodically. Users will be notified of significant changes.</p>

      <h2>12. Contact Information</h2>
      <p>For questions or support, please contact us at: support@puritytechsolutions.com</p>

      <p>By using our apps, you acknowledge that you have read, understood, and agree to these Terms.</p>
    </div>
  </>
);

export default TermsAndConditions;
