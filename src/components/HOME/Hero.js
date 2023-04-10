import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from 'react-image-gallery';

import PageTop from '../common/PageTop';

import bigTalk from '../../assets/logo/big-talk-logo-pos.svg';
import etwinning from '../../assets/logo/etwinning-logo-1.png';
import freelifesm from '../../assets/logo/free-lifem-logo.png';
import livresq from '../../assets/logo/LIVRESQ-logo.webp';
import nabu from '../../assets/logo/nabu-logo.avif';

import styles from './Hero.module.css';

const Hero = () => {
  const images = [
    {
      original: bigTalk,
      originalHeight: 400,
    },
    {
      original: etwinning,
      originalHeight: 400,
    },
    {
      original: freelifesm,
      originalHeight: 400,
    },
    {
      original: livresq,
      originalHeight: 400,
    },
    {
      original: nabu,
      originalHeight: 400,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PageTop>
        <div className={styles.content}>
          <ImageGallery
            items={images}
            lazyLoad={true}
            showThumbnails={false}
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
          />
        </div>
      </PageTop>
    </motion.div>
  );
};

export default Hero;
