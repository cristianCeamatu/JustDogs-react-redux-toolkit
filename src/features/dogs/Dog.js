/* eslint-disable  object-curly-newline, max-len, no-unused-vars, arrow-body-style */
import React, { useState } from 'react';
import { Proptypes } from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './dogsSlice';
// import styles from './Dogs.module.css';

const Dog = props => {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  console.log('props :>> ', props);
  return (
    <div>
      <h2>Hello from Dog!</h2>
    </div>
  );
};

export default Dog;
