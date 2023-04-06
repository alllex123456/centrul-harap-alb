import React from 'react';
import { NavLink } from 'react-router-dom';

import { navigationItems } from '../../store/navigation-items';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles['internal-links']}>
        <ul className={styles['list-internal-links']}>
          {navigationItems.map((item, index) => {
            return (
              <li key={index} className={styles.item}>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  to={item.route}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles['external-links']}>Link extern</div>
    </footer>
  );
};

export default Footer;
