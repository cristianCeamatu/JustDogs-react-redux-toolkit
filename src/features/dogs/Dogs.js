/* eslint-disable  object-curly-newline, max-len, no-unused-vars, arrow-body-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDogs } from './dogsSlice';

import Filter from './Filter';
// import styles from './Dogs.module.css';

const Dogs = () => {
  let dogs = useSelector(state => state.dogs.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dogs.length === 0) {
      dispatch(getDogs());
    }
  }, [dispatch]);

  // if (dogs.length === 0 && localStorage.getItem('dogs')) {
  //   dogs = JSON.parse(localStorage.getItem('dogs'));
  //   dispatch(setDogsFromStorage(dogs));
  // } else if (dogs.length > 0) {
  //   localStorage.setItem('dogs', JSON.stringify(dogs));
  // }

  const lifeSpanFilter = useSelector(state => state.dogs.lifeSpanFilter);

  if (lifeSpanFilter) {
    dogs = dogs.filter(dog => dog.breeds[0].life_span === lifeSpanFilter);
  }

  const dogsElements = dogs.map(dog => (
    <article key={dog.id}>
      <Link to={`/${dog.id}`} dog={dog}>
        <img src={dog.url} alt={dog.id} />
      </Link>
    </article>
  ));
  return (
    <div>
      <h2>Check the dogs</h2>
      <Filter />
      {dogsElements}
    </div>
  );
};

export default Dogs;
