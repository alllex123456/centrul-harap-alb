import React from 'react';
import Hero from '../components/HOME/Hero';
import Gallery from '../components/HOME/Gallery';
import Activities from '../components/HOME/Activities';
import Camps from '../components/HOME/Camps';
import Mission from '../components/HOME/Mission';
import Collaborators from '../components/HOME/Collaborators';
import Blog from '../components/HOME/Blog';
import SummerCamps from '../components/HOME/SummerCamps';
import Contact from '../components/HOME/Contact';
import Location from '../components/HOME/Location';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Mission />
      <Activities />
      <Camps />
      <SummerCamps />
      <Collaborators />
      <Gallery />
      <Blog />
      <Location />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
