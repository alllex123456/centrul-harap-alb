import React, { useState } from 'react';
import { motion } from 'framer-motion';

import PageTop from '../common/PageTop';

import styles from './Contact.module.css';
import Button from '../common/Button';

const Contact = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (value, field) => {
    setInputs((previousState) => ({
      ...previousState,
      [field]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PageTop>
        <h2 className="section-header">Contactează-ne!</h2>
        <div className={styles.content}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.group}>
              <div className={styles.subgroup}>
                <label htmlFor="name">Nume</label>
                <input
                  required
                  id="name"
                  type="text"
                  value={inputs.name}
                  onChange={(e) => handleChangeInput(e.target.value, 'name')}
                />
              </div>

              <div className={styles.subgroup}>
                <label htmlFor="name">Email</label>
                <input
                  required
                  id="email"
                  type="email"
                  value={inputs.email}
                  onChange={(e) => handleChangeInput(e.target.value, 'email')}
                />
              </div>
            </div>

            <div className={styles.textarea}>
              <label htmlFor="name">Mesaj</label>
              <textarea
                required
                id="message"
                type="message"
                rows="6"
                value={inputs.message}
                onChange={(e) => handleChangeInput(e.target.value, 'message')}
              />
            </div>

            <div className={styles.actions}>
              <Button primary type="submit">
                TRIMITE
              </Button>
            </div>
          </form>
          <div className={styles.data}>
            <h6>DATE DE CONTACT</h6>
            <p>societate, telefon, adresa...</p>
          </div>
        </div>
      </PageTop>
    </motion.div>
  );
};

export default Contact;
