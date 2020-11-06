import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeLifeSpanFilter } from './dogsSlice';

import styles from './Dogs.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const ageCategories = useSelector(state => state.dogs.data.map(dog => dog.breeds[0].life_span));
  const lifeSpanFilter = useSelector(state => state.dogs.lifeSpanFilter);
  const uniqGroups = [...new Set(ageCategories)];

  const categoriesOptions = uniqGroups.map(category => (
    <option key={category} value={category === 'All' ? '' : category}>
      {category}
    </option>
  ));

  return (
    <div className={styles.filter}>
      <p htmlFor="category" className={styles.filterLabel}>
        Filter by
      </p>
      <select
        className={styles.filterSelect}
        id="category"
        name="category"
        onChange={e => dispatch(changeLifeSpanFilter(e.target.value))}
        value={lifeSpanFilter}
      >
        <option value="">Life span</option>
        {categoriesOptions}
      </select>
    </div>
  );
};

export default Filter;
