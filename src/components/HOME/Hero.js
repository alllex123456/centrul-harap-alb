import React from 'react';
import { motion } from 'framer-motion';

import PageTop from '../common/PageTop';
import Button from '../common/Button';

import foto1 from '../../assets/activitati/poze - SET I/1679338707312.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PageTop>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1 className={styles.title}>
                <span className="display">C</span>entrul educațional HARAP ALB
              </h1>
              <p className={styles.introduction}>
                <span className="accent">Misiune</span>: formarea unei
                personalități creatoare, cu atitudine de ZIDITOR.
              </p>
              <p className={styles.introduction}>
                <span className="accent">Obiectiv</span>: crearea și
                fundamentarea unui concept nou în EDUCATIE
              </p>
              <hr />
              <p>
                Ziditorul este COPILUL MESTER, copilul creativ, capabil să ofere
                o variantă unică, de constructie, cu sens umanist, în rezolvarea
                sarcinilor instructiv-educative din activitatile in care este
                integrat.
              </p>
              <Button primary>CUM NE POȚI GĂSI</Button>
            </div>
            <div className={styles.images}>
              <img src={foto1} alt="" />
            </div>
          </div>
        </div>
      </PageTop>
    </motion.div>
  );
};

export default Hero;
