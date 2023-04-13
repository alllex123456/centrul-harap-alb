import React from 'react';
import { motion } from 'framer-motion';

import styles from './SectionHeader.module.css';

const SectionHeader = (props) => {
  return (
    <motion.h2
      initial={{ x: '-10rem' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.header} ${props.className}`}
    >
      <span className="display">{props.children.slice(0, 1)}</span>
      {props.children.slice(1)}
    </motion.h2>
  );
};

export default SectionHeader;
