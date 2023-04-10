import React from 'react';
import { motion } from 'framer-motion';

import styles from './Mission.module.css';

const Mission = () => {
  return (
    <motion.div className={styles.mission}>
      <h2 className="section-header">Misiunea noastră</h2>
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
