import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Navigation from './Navigation';

import logo from '../../assets/logo/hp-auriu.png';
import styles from './Header.module.css';
import { Envelope, Phone } from 'phosphor-react';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);
  return (
    <motion.header
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.header}
    >
      {windowWidth > 1000 && (
        <>
          <img
            className={styles.logo}
            src={logo}
            alt="logo Centrul educational Harap Alb"
          />
          <div className={styles.contact}>
            <div>
              <Envelope />
              office@office
            </div>
            <div>
              <Phone />
              123456
            </div>
          </div>
        </>
      )}
      <Navigation windowWidth={windowWidth} />
    </motion.header>
  );
};

export default Header;
