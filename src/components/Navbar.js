import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/favicon.png';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.navItems}>
      <li>
        <Link to="/" className={styles.navBrand}>
          <img src={logo} alt="Brand logo" width="40" height="40" />
          Dog Breeds
        </Link>
      </li>
      <li className={styles.navLink}>
        {' '}
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navLink}>
        {' '}
        <Link to="/">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
