import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { collaborators } from '../../store/collaborators';
import Button from '../common/Button';
import Modal from '../common/Modal';
import SectionHeader from '../common/SectionHeader';
import frame from '../../assets/flourish-frame-2.svg';

import styles from './Collaborators.module.css';

const Collaborators = () => {
  const [openDetails, setOpenDetails] = useState({
    show: false,
    content: {},
  });

  const handleOpenDetails = (collaborator) => {
    setOpenDetails({ show: true, content: collaborator });
  };

  const modalTitle = openDetails.content.name;
  const modalContent = (
    <div className={styles['modal-content']}>
      <div className={styles['image-container']}>
        <img className={styles.image} src={openDetails.content.photo} alt="" />
      </div>
      <div className={styles['modal-text']}>
        <h6>{openDetails.content.title}</h6>
        <p>info</p>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <AnimatePresence>
        {openDetails.show && (
          <Modal
            title={modalTitle}
            content={modalContent}
            onClose={() => setOpenDetails({ show: false, content: {} })}
          />
        )}
      </AnimatePresence>
      <motion.div
        id="colaboratori"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className={styles.collaborators}
        viewport={{ once: true }}
      >
        <SectionHeader>Colaboratorii noștri</SectionHeader>
        <div className={styles.content}>
          {collaborators.map((collaborator, index) => (
            <div className={styles.collaborator} key={index}>
              <figure>
                <img className={styles.frame} src={frame} alt="" />
                <div className={styles['image-container']}>
                  <img
                    className={styles.image}
                    src={collaborator.photo}
                    alt=""
                  />
                  <Button
                    primary
                    className={styles.button}
                    onClick={() => handleOpenDetails(collaborator)}
                  >
                    Detalii
                  </Button>
                </div>
              </figure>
              <div className={styles.name}>
                <h6>{collaborator.name}</h6>
                <p>{collaborator.title}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Collaborators;
