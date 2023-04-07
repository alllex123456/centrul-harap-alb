import React from 'react';
import { motion } from 'framer-motion';

import PageTop from '../common/PageTop';

import styles from './Contact.module.css';
import Button from '../common/Button';
import { useForm } from '../../hooks/useForm';

const Contact = () => {
  const { inputs, formIsValid, handleChangeInput, handleTouchInput } = useForm([
    'name',
    'email',
    'message',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className={styles.data}>
            <h6>DATE DE CONTACT</h6>
            <p>societate, telefon, adresa...</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.group}>
              <div className={styles.subgroup}>
                <div>
                  <label htmlFor="name">Nume*</label>
                  <input
                    required
                    className={
                      inputs.name.isTouched && !inputs.name.isValid
                        ? 'input-error'
                        : ''
                    }
                    id="name"
                    type="text"
                    value={inputs.name.value}
                    onChange={(e) => handleChangeInput(e.target.value, 'name')}
                    onBlur={() => handleTouchInput('name')}
                  />
                  {inputs.name.isTouched && !inputs.name.isValid && (
                    <p className={styles.error}>Nu ați introdus un nume</p>
                  )}
                </div>
              </div>

              <div className={styles.subgroup}>
                <div>
                  <label htmlFor="name">Email*</label>
                  <input
                    required
                    className={
                      inputs.email.isTouched && !inputs.email.isValid
                        ? 'input-error'
                        : ''
                    }
                    id="email"
                    type="email"
                    value={inputs.email.value}
                    onChange={(e) => handleChangeInput(e.target.value, 'email')}
                    onBlur={() => handleTouchInput('email')}
                  />
                  {inputs.email.isTouched && !inputs.email.isValid && (
                    <p className={styles.error}>Adresă de email invalidă</p>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.textarea}>
              <div>
                <label htmlFor="name">Mesaj*</label>
                <textarea
                  required
                  className={
                    inputs.message.isTouched && !inputs.message.isValid
                      ? 'input-error'
                      : ''
                  }
                  id="message"
                  type="message"
                  rows="6"
                  value={inputs.message.value}
                  onChange={(e) => handleChangeInput(e.target.value, 'message')}
                  onBlur={() => handleTouchInput('message')}
                />
              </div>
              {inputs.message.isTouched && !inputs.message.isValid && (
                <p className={styles.error}>Nu ați introdus un mesaj</p>
              )}
            </div>

            <div className={styles.actions}>
              <Button primary type="submit" disabled={formIsValid}>
                TRIMITE
              </Button>
            </div>
          </form>
        </div>
      </PageTop>
    </motion.div>
  );
};

export default Contact;
