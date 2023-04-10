import React from 'react';
import { motion } from 'framer-motion';

import styles from './Modal.module.css';
import { X } from 'phosphor-react';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

const Modal = (props) => {
  return (
    <Backdrop onClick={props.onClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.overlay}
      >
        <header className={styles.header}>
          <h6>{props.title}</h6>
          <X className={styles.close} onClick={props.onClose} />
        </header>
        <main className={styles.main}>{props.content}</main>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
