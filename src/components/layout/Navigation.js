import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, X } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '../common/Button';
import { navigationItems } from '../../store/navigation-items';

import logo from '../../assets/logo/hp-auriu.png';
import styles from './Navigation.module.css';

const Navigation = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  if (props.windowWidth > 1000) {
    return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navigationItems.map((item, index, array) => {
            if (index === array.length - 1)
              return (
                <Button
                  primary
                  to={item.route}
                  target={item.target}
                  key={index}
                >
                  {item.label}
                </Button>
              );
            return (
              <li key={index} className={styles.item}>
                <a href={item.route} target={item.target}>
                  {item.label}
                </a>
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
          <List size={32} weight="fill" />
        </button>
        <img src={logo} alt="" className={styles.logo} />
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
                {navigationItems.map((item, index, array) => {
                  if (index === array.length - 1)
                    return (
                      <Button
                        to={item.route}
                        target={item.target}
                        primary
                        key={index}
                      >
                        {item.label}
                      </Button>
                    );
                  return (
                    <li key={index} className={styles['mobile-item']}>
                      <a href={item.route}>{item.label}</a>
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
