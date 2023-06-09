import React from 'react';
import { motion } from 'framer-motion';

import FramedImage from '../common/FramedImage';

import SectionHeader from '../common/SectionHeader';
import foto1 from '../../assets/activitati/poze - SET I/1679339449434.jpg';
import foto2 from '../../assets/activitati/poze - SET I/1679338843975.jpg';
import foto3 from '../../assets/activitati/poze - SET I/1679338708435.jpg';
import styles from './Activities.module.css';

const Activities = () => {
  return (
    <motion.div
      id="activitati"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={styles.activities}
    >
      <SectionHeader>
        Activitați ale Centrului Educațional Harap Alb
      </SectionHeader>
      <div className={styles.content}>
        <div className={styles.zigzag}>
          <p>
            Activitățile sunt axate pe învățarea nonformală, cu accent pe o
            îmbinare armonioasă dintre valorile tradiționale, specifice
            pământului românesc, și competențele digitale, care tin de noile
            tehnologii. Acestea sunt adresate grupelor de excelență la
            MATEMATICĂ.
          </p>
          <FramedImage size="large" image={foto1} />
        </div>

        <div className={styles.zigzag}>
          <FramedImage size="large" image={foto2} />
          <p>
            De la PET SCHOOL - lecții cu doctor veterinar, ateliere specifice,
            inclusiv sportive, și club de lectură cu recomandări de cărți, oră
            de Istorie, gradinarit până la gastronomie practică, cursuri de
            limba maghiară / limba română sau ore de Dezvoltare personală,
            lecții de istorie, toate sunt activități propuse la centrul nostru.
          </p>
        </div>

        <div className={styles.zigzag}>
          <ul className={styles.list}>
            <li>cercetare în domeniul curricular transdisciplinar</li>
            <hr />
            <li>
              diseminare/frmare cadre didactice învățământul primar și secundar
            </li>
            <hr />
            <li>activitati de tip TABERE DE VARA</li>
            <hr />
            <li>consiliere/parenting</li>
            <hr />
          </ul>
          <FramedImage size="large" image={foto3} />
        </div>
      </div>
    </motion.div>
  );
};

export default Activities;
