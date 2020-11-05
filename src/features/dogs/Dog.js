/* eslint-disable  object-curly-newline, max-len, no-unused-vars, arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import styles from './Dogs.module.css';

/* eslint-disable */
const Dog = ({ match }) => {
  const { id } = match.params;

  const dogs = useSelector(state => state.dogs.data);
  const dog = dogs.find(dog => dog.id === id) || JSON.parse(localStorage.getItem('dog'));

  if (dog) {
    localStorage.setItem('dog', JSON.stringify(dog));
  }

  const { url } = dog;
  const {
    name,
    height,
    weight,
    temperament,
    bred_for: bredFor,
    breed_group: bredGroup,
    life_span: lifeSpan,
  } = dog.breeds[0];

  return (
    <section>
      <img src={url} alt={name} width="500" height="250" />
      <h3>
        Breed:
        {name}
      </h3>
      <p>Super powers:</p>
      <ul>
        <li>
          Temperament:
          {temperament}
        </li>
        <li>
          Life span:
          {lifeSpan}
        </li>
        <li>
          Bred for:
          {bredFor}
        </li>
        <li>
          Bred group:
          {bredGroup}
        </li>
        <li>
          Height:
          {height.metric}
          cm
        </li>
        <li>
          Weight:
          {weight.metric}
          kg
        </li>
        <li>
          <a
            href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
              name,
            )}&go=Go&ns0=1`}
            // TODO check norefere no opener sintax
            target="_blank"
            rel="noreferrer"
          >
            Check Wikipedia for more info about
            <b>{` ${name}`}</b>
          </a>
        </li>
      </ul>
    </section>
  );
};

Dog.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dog;
