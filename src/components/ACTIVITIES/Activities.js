import React from 'react';
import { motion } from 'framer-motion';

import Card from '../common/Card';

import king from '../../assets/sword-1.svg';
import styles from './Activities.module.css';

const Activities = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.activities}
    >
      <div className={styles.content}>
        <h2 className="section-header">
          <span className="monsieur">A</span>ctivitațile cu copiii
        </h2>
        <Card>
          <div className={styles.container}>
            <div className={styles.left}>
              <img src={king} alt="" className={styles.sword} />
            </div>
            <div className={styles.right}>
              <p>
                Activitățile sunt axate pe învățarea nonformală, cu accent pe o
                îmbinare armonioasă dintre valorile tradiționale, specifice
                pământului românesc, și competențele digitale, care tin de noile
                tehnologii. sunt adresate grupelor de excelenta la MATEMATICA
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.left}>
              <img src={king} alt="" className={styles.sword} />
            </div>
            <div className={styles.right}>
              <ul className={styles.list}>
                <p className="subtitle">Activitati ale centrului</p>
                <li>formare/diseminare/mentorat cadre didactice</li>
                <li>
                  formare/diseminare/consiliere de tip parenting cercetare în
                  domeniul curricular transdisciplinar
                </li>
                <li>activitati de tip TABERE DE VARA</li>
              </ul>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.left}>
              <img src={king} alt="" className={styles.sword} />
            </div>
            <div className={styles.right}>
              <p>
                De la PET SCHOOL- lectii cu doctor veterinar,, ateliere
                specifice, inclusiv sportive, și club de lectură cu recomandări
                de cărți,ora de Istorie, gradinarit până la gastronomie
                practică, cursuri de lb. maghiară / lb. română sau ore de
                Dezvoltare personala lecții de istorie, toate sunt activități
                propuse la centrul nostru.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Activities;
