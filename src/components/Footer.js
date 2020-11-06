import React from 'react';
import styles from './Footer.module.css';
/* eslint-disable react/jsx-one-expression-per-line */
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      Made with
      <span className={styles.hearts} role="img" aria-label="hearts">
        💕
      </span>
      by&nbsp;<a href="https://www.cristian.adydev.com/">Cristian Ceamatu</a>
    </div>
  </footer>
);

export default Footer;
