import React from 'react';
import NavigationDesktop from './NavigationDesktop';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <NavigationDesktop />
    </header>
  );
};

export default Header;
