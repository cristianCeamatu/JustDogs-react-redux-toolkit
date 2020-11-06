import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    Made with
    <span className={styles.hearts} role="img" aria-label="hearts">
      💕
    </span>
    by
    <a href="https://www.cristian.adydev.com/">Cristian Ceamatu</a>
  </footer>
);

export default Footer;
