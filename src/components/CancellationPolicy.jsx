import React from 'react';
import './css/CancellationPolicy.css';
import NewNavBar from './NewNavBar';

const CancellationPolicy = () => {
  return (
    <>
     <NewNavBar />
    <div className="policy-container">
      <header className="policy-header">
        <h1>Cancellation & Refund Policy</h1>
      </header>
      <main className="policy-content">
        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            At Suco, we strive to ensure that our customers have a seamless and satisfying experience. 
            This Cancellation/Refund Policy outlines the terms under which cancellations and refunds are handled 
            for orders placed through our platform.
          </p>
        </section>
        <section className="policy-section">
          <h2>Order Cancellation Policy</h2>
          {/* <p>
            <strong>Cancellations Before Preparation:</strong> Orders can be canceled free of charge if the cancellation request is made before the restaurant begins preparing the food.
          </p>
          <p>
            <strong>Cancellations After Preparation:</strong> Once the restaurant starts preparing your food, cancellations are no longer permitted.
          </p>
          <p>
            To cancel an order, go to the "My Orders" section in the app, select the order, and click "Cancel Order."
          </p> */}
          <p>Currently, we do not have a cancellation policy in place.</p>
        </section>
        <section className="policy-section">
          <h2>Refund Policy</h2>
          <p>
            Refunds will be issued in the following cases:
            <ul>
              <li>The order was canceled before preparation began.</li>
              <li>The delivered order was incorrect, incomplete, or of unacceptable quality (subject to verification).</li>
            </ul>
          </p>
          <p>
            Refunds will not be issued for:
            <ul>
              <li>Orders delivered successfully but not meeting personal taste preferences.</li>
              <li>Late delivery due to unforeseen circumstances like traffic or weather.</li>
            </ul>
          </p>
          <p>
            Refunds will be processed to the original payment method or as app credits within 5-7 business days.
          </p>
        </section>
        <section className="policy-section">
          <h2>Contact Information</h2>
          <p>
            For any questions or concerns regarding our Cancellation/Refund Policy, please contact us:
          </p>
          <ul>
            <li>Email: info@puritytechsolutions.in</li>
            <li>Phone: +91 8149772397</li>
          </ul>
        </section>
      </main>
    </div>
    </>
  );
};

export default CancellationPolicy;
