import React from 'react';
import Hero from '../components/HOME/Hero';
import Gallery from '../components/HOME/Gallery';
import Activities from '../components/ACTIVITIES/Activities';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Gallery />
      <Activities />
    </React.Fragment>
  );
};

export default Home;
