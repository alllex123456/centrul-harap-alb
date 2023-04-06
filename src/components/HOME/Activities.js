import React from 'react';
import { motion } from 'framer-motion';

import Button from '../common/Button';

import foto1 from '../../assets/activitati/poze - SET I/1679339449434.jpg';
import foto2 from '../../assets/activitati/poze - SET I/1679338843975.jpg';
import sword from '../../assets/sword-1.svg';
import shield from '../../assets/shield-1.svg';
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
          <span className="display">A</span>ctivitațile cu copiii
        </h2>
        <div className={styles.paper}>
          <div className={styles.container}>
            <div>
              <div className={styles.left}>
                <img src={sword} alt="" className={styles.sword} />
              </div>
              <div className={styles.right}>
                <p>
                  Activitățile sunt axate pe învățarea nonformală, cu accent pe
                  o îmbinare armonioasă dintre valorile tradiționale, specifice
                  pământului românesc, și competențele digitale, care tin de
                  noile tehnologii. sunt adresate grupelor de excelenta la
                  MATEMATICA
                </p>
              </div>
            </div>
            <div>
              <div className={styles.left}>
                <img src={shield} alt="" className={styles.sword} />
              </div>
              <div className={styles.right}>
                <p>
                  De la PET SCHOOL- lectii cu doctor veterinar,, ateliere
                  specifice, inclusiv sportive, și club de lectură cu
                  recomandări de cărți,ora de Istorie, gradinarit până la
                  gastronomie practică, cursuri de lb. maghiară / lb. română sau
                  ore de Dezvoltare personala lecții de istorie, toate sunt
                  activități propuse la centrul nostru.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div>
              <img src={foto1} alt="" />
            </div>
            <div>
              <ul className={styles.list}>
                <p className="subtitle">Activitati ale centrului</p>
                <li>formare/diseminare/mentorat cadre didactice</li>
                <hr />
                <li>
                  formare/diseminare/consiliere de tip parenting cercetare în
                  domeniul curricular transdisciplinar
                </li>
                <hr />
                <li>activitati de tip TABERE DE VARA</li>
                <li>
                  <Button primary to="/activitati">
                    VEZI ACTIVITĂȚI
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <img src={foto2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Activities;
