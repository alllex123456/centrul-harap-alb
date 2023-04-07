import React from 'react';
import Hero from '../components/HOME/Hero';
import Gallery from '../components/HOME/Gallery';
import Activities from '../components/HOME/Activities';
import Camps from '../components/HOME/Camps';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Gallery />
      <Activities />
      <Camps />
    </React.Fragment>
  );
};

export default Home;
