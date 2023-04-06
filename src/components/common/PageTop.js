import React from 'react';

import styles from './PageTop.module.css';

const PageTop = (props) => {
  return <div className={styles.top}>{props.children}</div>;
};

export default PageTop;
