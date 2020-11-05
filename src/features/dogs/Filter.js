import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeLifeSpanFilter } from './dogsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const ageCategories = useSelector(state => state.dogs.data.map(dog => dog.breeds[0].life_span));
  const uniqGroups = [...new Set(ageCategories)];

  const categoriesOptions = uniqGroups.map(category => (
    <option key={category} value={category === 'All' ? '' : category}>
      {category}
    </option>
  ));

  return (
    <div className="filter form-group mb-4 bg-white w-100 px-2 py-3 shadow-sm">
      <label htmlFor="category" className="d-flex align-items-center justify-content-center mb-0">
        Filter by life span
        <select
          className="form-control ml-3 w-50"
          id="category"
          name="category"
          onChange={e => dispatch(changeLifeSpanFilter(e.target.value))}
        >
          <option value="">All</option>
          {categoriesOptions}
        </select>
      </label>
    </div>
  );
};

export default Filter;
