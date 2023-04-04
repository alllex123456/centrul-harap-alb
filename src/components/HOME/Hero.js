import React from 'react';
import { motion } from 'framer-motion';

import Card from '../common/Card';

import foto1 from '../../assets/activitati/poze - SET I/1679338707312.jpg';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.hero}
    >
      <div className={styles.content}>
        <Card>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1 className={styles.title}>
                <span className="monsieur">C</span>entrul educațional HARAP ALB
              </h1>
              <p className={styles.introduction}>
                <span className="accent">Misiune</span>: formarea unei
                personalități creatoare, cu atitudine de ZIDITOR.{' '}
              </p>
              <hr />
              <p>
                Ziditorul este COPILUL MESTER, copilul creativ, capabil să ofere
                o variantă unică, de constructie, cu sens umanist, în rezolvarea
                sarcinilor instructiv-educative din activitatile in care este
                integrat.
              </p>
            </div>
            <div className={styles.images}>
              <img src={foto1} alt="" />
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Hero;
