/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getNextDogs } from './dogsSlice';

// import Loading from '../../components/Loading';
// import Error from '../../components/Error';
import refreshIcon from '../../assets/refresh.png';
import styles from './Dogs.module.css';

const NextDogs = () => {
  const dispatch = useDispatch();

  const nextDogs = useSelector(state => state.dogs.nextDogs.slice(0, 4));
  const nextDogsRef = useRef(null);

  useEffect(() => {
    dispatch(getNextDogs());
  }, [dispatch]);

  const handleClick = e => {
    e.preventDefault();
    dispatch(getNextDogs());
    window.scrollTo(0, nextDogsRef.current.offsetTop);
  };

  const dogsElements = nextDogs.map((dog, index) => (
    <article key={index} className={styles.dogArticle}>
      <Link to={`/${dog.id}`} dog={dog}>
        <img className={styles.dogArticleImg} src={dog.url} alt={dog.id} />
      </Link>
    </article>
  ));
  return (
    <div className={styles.dogsContainer}>
      <p className={styles.nextDogsHeading} ref={nextDogsRef}>
        Other random dogs
        <br />
        <button className={styles.button} type="button" onClick={handleClick}>
          <img className={styles.buttonIcon} src={refreshIcon} alt="Refresh icon" width="20" height="20" />
          Load others
        </button>
      </p>
      <div className={styles.dogsGridContainer}>{dogsElements}</div>
    </div>
  );
};

export default NextDogs;
