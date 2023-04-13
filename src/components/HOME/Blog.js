import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import SectionHeader from '../common/SectionHeader';

import styles from './Blog.module.css';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={styles.blog}
    >
      <SectionHeader>Noutăți de pe blog</SectionHeader>

      <div className={styles.content}>
        <Link to="/" target="_blank" className={styles.section}>
          <h6>Noutăți carte românească pentru copii &rarr;</h6>
        </Link>
        <Link to="/" target="_blank" className={styles.section}>
          <h6>Film pentru copii recomandat de noi &rarr;</h6>
        </Link>
        <Link to="/" target="_blank" className={styles.section}>
          <h6>Evenimente noi &rarr;</h6>
        </Link>
      </div>
    </motion.div>
  );
};

export default Blog;
