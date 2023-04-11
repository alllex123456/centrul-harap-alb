import React from 'react';
import { motion } from 'framer-motion';

import Button from '../common/Button';
import SectionHeader from '../common/SectionHeader';
import { camps } from '../../store/camps';
import frame from '../../assets/flourish-frame-2.svg';

import styles from './Camps.module.css';

const Camps = () => {
  return (
    <motion.div
      id="tabere"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={styles.camps}
    >
      <SectionHeader>
        <span className="display">T</span>abere {new Date().getFullYear()}
      </SectionHeader>
      <div className={styles.content}>
        {camps.map((camp, index) => (
          <div className={styles.camp} key={index}>
            <h6>{camp.name}</h6>
            <div className={styles.dates}>
              <span>{camp.startDate.toLocaleDateString('ro')}</span> -{' '}
              <span>{camp.endDate.toLocaleDateString('ro')}</span>
            </div>
            <figure>
              <img className={styles.frame} src={frame} alt="" />
              <div className={styles['image-container']}>
                <img className={styles.image} src={camp.image} alt="" />
              </div>
            </figure>
            <Button secondary to={camp.route} target="_blank">
              Rezervă loc
            </Button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Camps;
