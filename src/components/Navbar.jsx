import React from 'react';
import { Link } from 'react-scroll';
import '../components/css/Navbar.css';
import logo from '../image/purity_logo.jpeg';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img
       src={logo}
        alt="Company Logo"
        className="logo-image"
      />
      {/* <h1 className="logo-text">Purity Tech Solutions</h1> */}
    </div>
    <ul className="nav-links">
      {['home', 'about','services', 'projects', 'team', 'footer'].map((section) => (
        <li key={section}>
          <Link to={section} smooth={true} duration={500} offset={-70}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
