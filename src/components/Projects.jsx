import React, { useRef, useState } from 'react';
import '../components/css/Projects.css';
import photoimg3  from '../image/Final logo.png'
import photoimg2  from '../image/rk.jpeg'
import photoimg1  from '../image/more.jpeg'



const Projects = () => {
  const scrollRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({}); // State to track expanded cards

  const toggleExpand = (index) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "CRM Application - More Sales",
      description: (
        <>
          <p>It's a one-stop solution created for all types of businesses who want to streamline their Customer Relationship Management system with our Purity CRM application.</p>
          <h4>Our Client</h4>
          <p>More Sales, Khed</p>
          <h4>Our Application Features</h4>
          <p>
            <strong>Admin Portal:</strong><br />
            - Onboard/ Manage new sales manager to CRM app.<br />
            - Create new sales lead and assign that to sales managers.<br />
            - Track the leads created by sales managers.<br />
            - Create/ Manage the sales feedback form & questions.<br />
            - Admin can use the live chat feature to interact with sales manager to close the lead.<br />
            - Publish bulk promotional WhatsApp messages to existing customers.<br />
            - Upload the product catalog used by sales managers to send details to customers.
          </p>
        </>
      ),
      image: photoimg1,

    },
    {
      title: "Gym Management Application",
      description: (
        <div>
          <p>The application is developed to maintain the Gym members information and manage the billing cycles.</p>
          <h4>Application Features:</h4>
          <p><strong>Our Client</strong>: Rk fitness, Khed</p>
          <p>- Create/ Manage the Gym members details.<br/>
- Create/ Manage the Gym subsription data.<br/>
- Track the Gym memebrs fees status.<br/>
- The application sends the fee pending reminders whats app message to Gym member.</p>
         
        </div>
      ),
      image: photoimg2,
    },
    {
      title: "SUCO - Food Delivery Application",
      description: (
        <div>
          <p>SUCO is a food delivery application built for restaurants to grow their business digitally.</p>
          <p><strong>Our Client</strong>: Various restaurant clients</p>
          <h4>User Registration and Profile Management</h4>
          
          <p>
          Sign-Up/Login: Users should be able to register using email, phone number, or social media accounts.<br/>
          Profile Management: Users can manage their details, including delivery address, payment methods, preferences, etc.
          </p>
          <h4>Restaurant Discovery and Search</h4>
          
          <p>Restaurant Listings: A curated list of restaurants available for delivery, sorted by categories.
            <br/>
            Filters and Search Options: Ability to search by restaurant name, food type, price range, etc.
          </p>
        </div>
      ),
      image: photoimg3,
      
    },
    // Other projects...
  ];

  return (
    <section id="projects" className="projects">
      <h2>Our Projects</h2>
      <div className="projects-container">
        <button className="scroll-arrow left" onClick={() => scroll('left')}>
          &#8249;
        </button>
        <div className="project-grid" ref={scrollRef}>
          {projects.map((project, index) => (
            <div
              className={`project-card ${expandedCards[index] ? 'expanded' : ''}`}
              key={index}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <div className="project-description">
                {expandedCards[index] ? (
                  <>
                  <div>{project.description}</div>
                  <div className="footer-links1">
        <h4>Quick Links</h4>
        <ul>
          {/* <li><a href="/services">Services</a></li> */}
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/cancellation-policy">Cancellation Policy</a></li>

          
        </ul>
      </div>
      </>
                ) : (
                  <div>
                    {React.cloneElement(project.description, {}, project.description.props.children.slice(0, 3))}
                    
                  </div>
                )}
              </div>
              <button
                className="show-more-btn"
                onClick={() => toggleExpand(index)}
              >
                {expandedCards[index] ? 'Show Less' : 'Show More'}
              </button>
            </div>
          ))}
        </div>
        <button className="scroll-arrow right" onClick={() => scroll('right')}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Projects;
