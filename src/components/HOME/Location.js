import React from 'react';

import styles from './Location.module.css';
import SectionHeader from '../common/SectionHeader';

const Location = () => {
  return (
    <div className={styles.location}>
      <div className={styles.content}>
        <SectionHeader>Cum ne puteți găsi</SectionHeader>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bucure%C8%99ti+(Centrul%20Educa%C8%9Bional%20Harap%20Alb)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
