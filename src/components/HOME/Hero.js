import React from 'react';

import styles from './Hero.module.css';
import Card from '../common/Card';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <Card>
          <h1>
            <span className={styles.display}>H</span>ero
          </h1>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
