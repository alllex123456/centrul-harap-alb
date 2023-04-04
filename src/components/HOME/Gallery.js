import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from 'react-image-gallery';

import foto1 from '../../assets/activitati/poze - SET I/1679338707312.jpg';
import foto2 from '../../assets/activitati/poze - SET I/1679338707339.jpg';
import foto3 from '../../assets/activitati/poze - SET I/1679338707397.jpg';
import foto4 from '../../assets/activitati/poze - SET I/1679338707426.jpg';
import foto5 from '../../assets/activitati/poze - SET I/1679338707804.jpg';
import foto6 from '../../assets/activitati/poze - SET I/1679338707886.jpg';
import foto7 from '../../assets/activitati/poze - SET I/1679338708021.jpg';
import foto8 from '../../assets/activitati/poze - SET I/1679338708131.jpg';
import foto9 from '../../assets/activitati/poze - SET I/1679338708380.jpg';

import styles from './Gallery.module.css';

const Gallery = () => {
  const images = [
    {
      original: foto1,
      thumbnail: foto1,
      originalHeight: 700,
    },
    {
      original: foto2,
      thumbnail: foto3,
      originalHeight: 700,
    },
    {
      original: foto3,
      thumbnail: foto3,
      originalHeight: 700,
    },
    {
      original: foto4,
      thumbnail: foto4,
      originalHeight: 700,
    },
    {
      original: foto5,
      thumbnail: foto5,
      originalHeight: 700,
    },
    {
      original: foto6,
      thumbnail: foto6,
      originalHeight: 700,
    },
    {
      original: foto7,
      thumbnail: foto7,
      originalHeight: 700,
    },
    {
      original: foto8,
      thumbnail: foto8,
      originalHeight: 700,
    },
    {
      original: foto9,
      thumbnail: foto9,
      originalHeight: 700,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.gallery}
    >
      <h2 className="section-header">
        <span className="monsieur">A</span>ctivități în imagini
      </h2>
      <ImageGallery items={images} lazyLoad={true} />
    </motion.div>
  );
};

export default Gallery;
