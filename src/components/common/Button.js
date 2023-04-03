import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  const variant = props.primary
    ? styles.primary
    : props.secondary
    ? styles.secondary
    : styles.text;

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
