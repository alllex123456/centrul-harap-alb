import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button';

import styles from './NavigationDesktop.module.css';

const items = [
  { label: 'Acasa', icon: '', route: '/' },
  { label: 'Misiune', icon: '', route: '/misiune' },
  ,
  { label: 'Activitati', icon: '', route: '/activitati' },
  ,
  { label: 'Colaboratori', icon: '', route: '/colaboratori' },
  { label: 'Contact', icon: '', route: '/contact' },
];

const NavigationDesktop = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map((item, index, array) => {
          if (index === array.length - 1)
            return (
              <Button primary key={index}>
                {item.label}
              </Button>
            );
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
    </nav>
  );
};

export default NavigationDesktop;
