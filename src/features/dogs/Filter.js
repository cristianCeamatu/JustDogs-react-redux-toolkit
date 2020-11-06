import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeBreedGroupFilter, changeLifeSpanFilter } from './dogsSlice';
/* eslint-disable max-len */
import styles from './Dogs.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const lifeSpanFilter = useSelector(state => state.dogs.lifeSpanFilter);
  const ageCategories = useSelector(state => state.dogs.data.map(dog => dog.breeds[0].life_span));
  const uniqAgesArray = [...new Set(ageCategories)];
  const ageOptions = uniqAgesArray.map(category => (
    <option key={category} value={category === 'All' ? '' : category}>
      {category}
    </option>
  ));

  const bredGroupFilter = useSelector(state => state.dogs.bredGroupFilter);
  const breedGroupCategories = useSelector(state => state.dogs.data.map(dog => dog.breeds[0].breed_group));
  const uniqBreedGroupsArray = [...new Set(breedGroupCategories)];
  const breedGroupOptions = uniqBreedGroupsArray.map(category => (
    <option key={category} value={category === 'All' ? '' : category}>
      {category}
    </option>
  ));

  return (
    <div className={styles.filter}>
      <p htmlFor="category" className={styles.filterLabel}>
        Filter by
      </p>
      <div>
        <select
          className={styles.filterSelect}
          id="category"
          name="category"
          onChange={e => dispatch(changeBreedGroupFilter(e.target.value))}
          value={bredGroupFilter}
        >
          <option value="">Breed group (all)</option>
          {breedGroupOptions}
        </select>

        <select
          className={styles.filterSelect}
          id="category"
          name="category"
          onChange={e => dispatch(changeLifeSpanFilter(e.target.value))}
          value={lifeSpanFilter}
        >
          <option value="">Life span (all)</option>
          {ageOptions}
        </select>
      </div>
    </div>
  );
};

export default Filter;
