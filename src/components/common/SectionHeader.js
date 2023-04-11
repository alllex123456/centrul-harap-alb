import React from 'react';
import { motion } from 'framer-motion';

import styles from './SectionHeader.module.css';

const SectionHeader = (props) => {
  return (
    <motion.h2
      initial={{ x: '-10rem' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.header}
    >
      {props.children}
    </motion.h2>
  );
};

export default SectionHeader;
