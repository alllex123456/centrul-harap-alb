import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FacebookLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';

import { navigationItems } from '../../store/navigation-items';

import logo from '../../assets/logo/hp-dark.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} height={100} alt="logo Centrul educational Harap Alb" />
        <div className={styles.social}>
          <Link to="/">
            <FacebookLogo />
          </Link>
          <Link to="/">
            <TwitterLogo />
          </Link>
          <Link to="/">
            <YoutubeLogo />
          </Link>
        </div>
      </div>
      <div className={styles['internal-links']}>
        <p className={styles['list-header']}>Link-uri rapide</p>
        <ul className={styles['list-links']}>
          {navigationItems.map((item, index) => {
            return (
              <li key={index} className={styles.item}>
                <a href={item.route}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles['external-links']}>
        <p className={styles['list-header']}>Legal</p>
        <ul className={styles['list-links']}>
          <li>
            <Link to="/" target="_blank">
              ANPC
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank">
              Politica de confidențialitate
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank">
              Politica de coookie
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <p className={styles['list-header']}>Contact</p>
        <ul className={styles['list-links']}>
          <li>
            <span>Locație</span>: Strada Nr.
          </li>
          <li>
            <span>Telefon</span>: 123456
          </li>
          <li>
            <span>Email</span>: contact@exemplu.ro
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
