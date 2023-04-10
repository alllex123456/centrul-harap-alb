import React from 'react';
import Hero from '../components/HOME/Hero';
import Gallery from '../components/HOME/Gallery';
import Activities from '../components/HOME/Activities';
import Camps from '../components/HOME/Camps';
import Mission from '../components/HOME/Mission';
import Collaborators from '../components/HOME/Collaborators';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Mission />
      <Activities />
      <Gallery />
      <Collaborators />
    </React.Fragment>
  );
};

export default Home;
