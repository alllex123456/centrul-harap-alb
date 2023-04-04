import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Crown, X } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '../common/Button';

import styles from './Navigation.module.css';

const items = [
  { label: 'Acasă', icon: '', route: '/' },
  { label: 'Activități', icon: '', route: '/activitati' },
  { label: 'Colaboratori', icon: '', route: '/colaboratori' },
  { label: 'Imagini', icon: '', route: '/imagini' },
  { label: 'Contact', icon: '', route: '/contact' },
];

const Navigation = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  if (props.windowWidth > 1000) {
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
  } else {
    return (
      <React.Fragment>
        <button
          className={styles['nav-open-button']}
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <Crown size={32} weight="fill" />
        </button>
        <AnimatePresence>
          {showMobileNav && (
            <motion.div
              key="mobileNav"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
              className={styles['mobile-nav']}
            >
              <X
                size={32}
                className={styles['nav-close-button']}
                onClick={() => setShowMobileNav(!showMobileNav)}
              />
              <ul className={styles['mobile-list']}>
                {items.map((item, index, array) => {
                  if (index === array.length - 1)
                    return (
                      <Button primary key={index}>
                        {item.label}
                      </Button>
                    );
                  return (
                    <li key={index} className={styles['mobile-item']}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? styles.active : ''
                        }
                        to={item.route}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </React.Fragment>
    );
  }
};

export default Navigation;
