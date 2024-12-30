import React from 'react';
import './css/Services.css';

const Services = () => (
  <div className="services">
    <header className="services-header">
      <h1>Our Services</h1>
      <p>
        At Purity Tech Solutions, we specialize in helping businesses grow by taking them online. Whether you need a website, a mobile application, or digital marketing, we provide tailored solutions for your needs.
      </p>
    </header>
    <section className="services-list">
      <div className="service-item">
        <h3>Web Development</h3>
        <p>
          Create stunning, responsive websites that represent your business. From corporate sites to e-commerce platforms, we deliver quality.
        </p>
      </div>
      <div className="service-item">
        <h3>Mobile App Development</h3>
        <p>
          Build powerful mobile applications for Android & iOS  to connect with your customers on the go.
        </p>
      </div>
      <div className="service-item">
        <h3>UI/UX Design</h3>
        <p>
          Create visually appealing and user-friendly interfaces that enhance customer experience and engagement.
        </p>
      </div>
      {/* <div className="service-item">
        <h3>Digital Marketing</h3>
        <p>
          Boost your online presence through SEO, social media strategies, and tailored content creation.
        </p>
      </div> */}
      <div className="service-item">
        <h3>Consulting Services</h3>
        <p>
          Need guidance? We provide consulting services to help businesses with their digital transformation strategies.
        </p>
      </div>
    </section>
    
  </div>
);

export default Services;
