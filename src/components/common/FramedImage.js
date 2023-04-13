import React from 'react';
import ImageFrame from '../svg/ImageFrame';

import styles from './FramedImage.module.css';

const FramedImage = ({ size, image }) => {
  return (
    <div className={styles[`image-container--${size}`]}>
      <img className={styles[`image--${size}`]} src={image} alt="" />
      <ImageFrame className={styles[`frame--${size}`]} />
    </div>
  );
};

export default FramedImage;
