import React from 'react';
import '../components/css/Navbar.css';
import logo from '../image/purity_logo.jpeg';
import { Link } from 'react-router-dom';

const NewNavBar = () => (
  <nav className="navbar">
    <div className="logo-container">
    <Link to="/" className="logo-link"> {/* Wrap both logo and text with Link */}
        <img
          src={logo}
          alt="Company Logo"
          className="logo-image"
        />
    
      </Link>
      {/* <h1 className="logo-text">Purity Tech Solutions</h1> */}
    </div>

    
  </nav>
);

export default NewNavBar;
