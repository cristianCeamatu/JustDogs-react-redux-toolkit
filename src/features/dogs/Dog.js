/* eslint-disable  object-curly-newline, max-len, no-unused-vars, arrow-body-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './dogsSlice';
// import styles from './Dogs.module.css';

const Dog = ({ match }) => {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  const { id } = match.params;
  console.log('props :>> ', id);
  return (
    <div>
      <h2>Hello from Dog!</h2>
    </div>
  );
};

Dog.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dog;
