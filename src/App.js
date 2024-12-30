import React from 'react';
import Navbar from './components/Navbar';

import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CancellationPolicy from './components/CancellationPolicy';

const App = () => (
  <Router >
    <div className="App">
      {/* <Navbar /> */}
      
      {/* Main Page Routes */}
     
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
            <Home />
            <About />
            <Services />
            <Projects />
            <Team />
          </>
        } />
        
        {/* Specific Pages for Route */}
        
        
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      </Routes>

      {/* Footer always shown at the bottom */}
      <Footer />
    </div>
  </Router>
);

export default App;
