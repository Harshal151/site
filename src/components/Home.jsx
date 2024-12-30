import React from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
import '../components/css/Home.css';

const Home = () => (
  <section id="home" className="home">
    <div className="home-bg">
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="home-title"
        >
          Welcome to Purity Technology Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="home-subtext"
        >
          At Purity Technology Solution, we provide innovative tech solutions that drive business growth, enhance efficiency, and deliver exceptional customer experiences.
        </motion.p>

       
      </div>
    </div>
  </section>
);

export default Home;
