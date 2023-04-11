import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { summerCampActivities } from '../../store/summer-camp-activities';
import SectionHeader from '../common/SectionHeader';

import styles from './SummerCamps.module.css';

const SummerCamps = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={styles.summercamps}
    >
      <SectionHeader>
        <span className="display">A</span>ctivități în taberele de vară
      </SectionHeader>
      <div className={styles.content}>
        <h6>Obiectivul Centrului Educațional Harap Alb:</h6>
        <p className={styles.subtitle}>Crearea unui concept nou în EDUCAȚIE</p>

        <div className={styles.activities}>
          {summerCampActivities.map((activity, index) => (
            <Link
              key={index}
              to={activity.route}
              target="_blank"
              className={styles.activity}
            >
              <div className={styles['image-container']}>
                <img src={activity.image} alt={activity.name} />
              </div>
              <p className={styles['activity-name']}>{activity.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SummerCamps;
