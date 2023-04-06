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
      <Link to={props.to} className={`${styles.button} ${variant}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`${styles.button} ${variant}`}
      type={props.type || 'text'}
    >
      {props.children}
    </button>
  );
};

export default Button;
