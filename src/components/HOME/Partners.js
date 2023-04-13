import React from 'react';
import { motion } from 'framer-motion';

import bigTalk from '../../assets/logo/big-talk-logo-pos.svg';
import etwinning from '../../assets/logo/etwinning-logo-1.png';
import freelifesm from '../../assets/logo/free-lifem-logo.png';
import livresq from '../../assets/logo/LIVRESQ-logo.webp';
import nabu from '../../assets/logo/nabu-logo.avif';

import styles from './Partners.module.css';

const Partners = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={styles.partners}
    >
      <img src={bigTalk} alt="big talk logo" />
      <img src={etwinning} alt="etwinning logo" />
      <img src={freelifesm} alt="free life sm logo" />
      <img src={livresq} alt="livresq logo" />
      <img src={nabu} alt="nabu logo" />
    </motion.div>
  );
};

export default Partners;
