import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { collaborators } from '../../store/collaborators';
import Button from '../common/Button';
import Modal from '../common/Modal';
import SectionHeader from '../common/SectionHeader';
import FramedImage from '../common/FramedImage';

import styles from './Collaborators.module.css';
import { Info } from 'phosphor-react';

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
      <FramedImage size="medium" image={openDetails.content.photo} />
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
              <FramedImage size="medium" image={collaborator.photo} />

              <div className={styles.name}>
                <h6>{collaborator.name}</h6>
                <p>{collaborator.title}</p>
              </div>
              <Button
                primary
                className={styles.button}
                onClick={() => handleOpenDetails(collaborator)}
              >
                <Info size="large" />
              </Button>
            </div>
          ))}
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Collaborators;
