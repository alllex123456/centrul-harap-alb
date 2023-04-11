import React from 'react';
import { motion } from 'framer-motion';

import SectionHeader from '../common/SectionHeader';

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
        <h3>Formarea unei personalități creatoare, cu atitudine de ZIDITOR</h3>
        <p>
          Ziditorul este COPILUL MEȘTER, copilul creativ, capabil să ofere o
          variantă unică, de constructie, cu sens umanist, în rezolvarea
          sarcinilor instructiv-educative din activitățile în care este
          integrat.
        </p>
      </div>
    </motion.div>
  );
};

export default Mission;
