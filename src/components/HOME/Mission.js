import React from 'react';
import { motion } from 'framer-motion';

import SectionHeader from '../common/SectionHeader';
import FramedImage from '../common/FramedImage';

import image from '../../assets/activitati/poze - SET I/1679338708021.jpg';
import styles from './Mission.module.css';

const Mission = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className={styles.mission}
      viewport={{ once: true }}
    >
      <SectionHeader>Misiunea noastră</SectionHeader>
      <div className={styles.content}>
        <FramedImage size="large" image={image} />
        <div className={styles.text}>
          <h3>
            Formarea unei personalități creatoare, cu atitudine de ZIDITOR
          </h3>
          <p>
            Ziditorul este COPILUL MEȘTER, copilul creativ, capabil să ofere o
            variantă unică, de constructie, cu sens umanist, în rezolvarea
            sarcinilor instructiv-educative din activitățile în care este
            integrat.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Mission;
