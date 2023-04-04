import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Navigation from './Navigation';

import styles from './Header.module.css';

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.header}
    >
      {windowWidth > 1000 && <h1>LOGO</h1>}
      <Navigation windowWidth={windowWidth} />
    </motion.header>
  );
};

export default Header;