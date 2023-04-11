import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

const Button = (props) => {
  const variant = props.primary
    ? styles.primary
    : props.secondary
    ? styles.secondary
    : styles.text;

  if (props.to) {
    return (
      <Link
        to={props.to}
        target={props.target}
        className={`${props.className} ${styles.button} ${variant}`}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`${props.className} ${styles.button} ${variant}`}
      type={props.type || 'text'}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
