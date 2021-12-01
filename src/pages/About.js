import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container my-5">
        <h1>About this Application</h1>
        <p>Juan Peter Timothy, Information System</p>
      </div>

      <Footer />
    </>
  );
}

export default About;
