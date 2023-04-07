import React from 'react';
import { motion } from 'framer-motion';

import foto1 from '../../assets/activitati/poze - SET I/1679338708435.jpg';
import foto2 from '../../assets/activitati/poze - SET I/1679338843532.jpg';
import foto3 from '../../assets/activitati/poze - SET I/1679338843646.jpg';
import styles from './Camps.module.css';

const Camps = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.camps}
    >
      <h2 className="section-header">
        <span className="display">T</span>abere de vară
      </h2>
      <div className={styles.content}>
        TEXT
        <div className={styles.images}>
          <img src={foto1} alt="" />
          <img src={foto2} alt="" />
          <img src={foto3} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Camps;
