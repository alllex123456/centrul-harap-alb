import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { collaborators } from '../../store/collaborators';
import Button from '../common/Button';

import frame from '../../assets/flourish-frame-2.svg';
import styles from './Collaborators.module.css';
import Modal from '../common/Modal';

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
    <div>
      <h6>{openDetails.content.title}</h6>
      <p>info</p>
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
      <motion.div className={styles.collaborators}>
        <h2 className="section-header">Colaboratorii noștri</h2>
        <div className={styles.content}>
          {collaborators.map((collaborator, index) => (
            <div className={styles.collaborator} key={index}>
              <figure>
                <Button
                  primary
                  className={styles.button}
                  onClick={() => handleOpenDetails(collaborator)}
                >
                  Detalii
                </Button>
                <img className={styles.frame} src={frame} alt="" />
                <div className={styles['image-container']}>
                  <img
                    className={styles.image}
                    src={collaborator.photo}
                    alt=""
                  />
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
