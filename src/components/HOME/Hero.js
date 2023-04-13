import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from 'react-image-gallery';

import mainPhoto from '../../assets/slides/artem-kniaz-DqgMHzeio7g-unsplash.jpg';
import foto1 from '../../assets/activitati/poze - SET I/1679338707312.jpg';
import foto2 from '../../assets/activitati/poze - SET I/1679338707482.jpg';
import foto3 from '../../assets/activitati/poze - SET I/1679338707397.jpg';
import foto4 from '../../assets/activitati/poze - SET I/1679338707426.jpg';
import foto5 from '../../assets/activitati/poze - SET I/1679338707804.jpg';
import foto6 from '../../assets/activitati/poze - SET I/1679338707886.jpg';
import foto7 from '../../assets/activitati/poze - SET I/1679338708021.jpg';
import foto8 from '../../assets/activitati/poze - SET I/1679338708131.jpg';
import foto9 from '../../assets/activitati/poze - SET I/1679338708380.jpg';

import styles from './Hero.module.css';

const Hero = () => {
  const images = [
    {
      original: mainPhoto,
      thumbnail: mainPhoto,
      originalHeight: 900,
    },
    {
      original: foto1,
      thumbnail: foto1,
      originalHeight: 900,
    },
    {
      original: foto2,
      thumbnail: foto3,
      originalHeight: 900,
    },
    {
      original: foto3,
      thumbnail: foto3,
      originalHeight: 900,
    },
    {
      original: foto4,
      thumbnail: foto4,
      originalHeight: 900,
    },
    {
      original: foto5,
      thumbnail: foto5,
      originalHeight: 900,
    },
    {
      original: foto6,
      thumbnail: foto6,
      originalHeight: 900,
    },
    {
      original: foto7,
      thumbnail: foto7,
      originalHeight: 900,
    },
    {
      original: foto8,
      thumbnail: foto8,
      originalHeight: 900,
    },
    {
      original: foto9,
      thumbnail: foto9,
      originalHeight: 900,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={styles.hero}
    >
      <div className={styles.content}>
        <ImageGallery
          additionalClass={styles.gallery}
          slideDuration={800}
          items={images}
          lazyLoad={true}
          showThumbnails={false}
          showNav={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
        />
        <div className={styles.overlay}>
          <div className={styles.title}>
            <h1>
              <span className="display">C</span>entrul Educațional Harap Alb
            </h1>
            <h2>Crearea unui concept nou în EDUCAȚIE</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
