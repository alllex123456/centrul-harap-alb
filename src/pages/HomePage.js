import React from 'react';
import Hero from '../components/HOME/Hero';
import Activities from '../components/HOME/Activities';
import Camps from '../components/HOME/Camps';
import Mission from '../components/HOME/Mission';
import Collaborators from '../components/HOME/Collaborators';
import Blog from '../components/HOME/Blog';
import SummerCamps from '../components/HOME/SummerCamps';
import Contact from '../components/HOME/Contact';
import Location from '../components/HOME/Location';
import Partners from '../components/HOME/Partners';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Partners />
      <Mission />
      <SummerCamps />
      <Camps />
      <Activities />
      <Collaborators />
      <Blog />
      <Location />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
