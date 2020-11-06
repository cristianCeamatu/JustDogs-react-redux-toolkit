import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/favicon.png';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.container}>
      <ul className={styles.navItems}>
        <li>
          <Link to="/" className={styles.navBrand}>
            <img className={styles.navBrandImg} src={logo} alt="Brand logo" width="40" height="40" />
            Just Dogs
          </Link>
        </li>
        <li className={styles.navLink}>
          {' '}
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          {' '}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
