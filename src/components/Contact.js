import React from 'react';
import styles from './Contact.module.css';

import email from '../assets/email.png';
import github from '../assets/github.png';
import resume from '../assets/resume.png';

const Contact = () => (
  <div className={styles.container}>
    <h3>Contact me</h3>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img className={styles.img} width="30" height="30" src={github} alt="Github" />
        <a href="https://github.com/cristianCeamatu" target="_blank" rel="noreferrer">
          cristanCeamatu
        </a>
      </li>
      <li className={styles.link}>
        <img className={styles.img} width="30" height="30" src={email} alt="Mail" />
        <a href="mailto:cristian.ceamatu@gmail.com" target="_blank" rel="noreferrer">
          cristan.ceamatu@gmail.com
        </a>
      </li>
      <li className={styles.link}>
        <img className={styles.img} width="30" height="30" src={resume} alt="Resume" />
        <a href="https://www.cristian.adydev.com/" target="_blank" rel="noreferrer">
          cristan.adydev.com
        </a>
      </li>
    </ul>
  </div>
);

export default Contact;
