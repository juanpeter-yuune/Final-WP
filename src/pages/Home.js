import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Schools from '../components/Schools';
import Footer from '../components/Footer';

const Home = () => {
  return(
    <>
      <Navigation />
      <Header />
      <Schools/>
      <Footer />
    </>
  );
}

export default Home;