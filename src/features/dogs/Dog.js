/* eslint-disable  object-curly-newline, max-len, no-unused-vars, arrow-body-style, react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import temperamentImg from '../../assets/temperament.png';
import weightImg from '../../assets/weight.png';
import heightImg from '../../assets/height.png';
import lifeImg from '../../assets/life.png';
import groupImg from '../../assets/job.png';
import breedImg from '../../assets/breed.png';
import linkImg from '../../assets/link.png';
import styles from './Dog.module.css';

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
    breed_group: breedGroup,
    life_span: lifeSpan,
  } = dog.breeds[0];

  return (
    <div className={styles.container}>
      <section className={styles.dog}>
        <div className={styles.dogImgContainer}>
          <h3 className={styles.dogHeading}>{name}</h3>
          <img className={styles.dogImg} src={url} alt={name} />
        </div>
        <div className={styles.dogSkillsContainer}>
          <p className={styles.dogSubHeading}>Dog Super powers</p>
          <ul className={styles.dogSkills}>
            <li className={styles.dogSkill}>
              <span className={styles.dogSkillName}>
                <img className={styles.dogSkillImg} src={temperamentImg} alt="Temperament" />
                Temperament:{' '}
              </span>
              <span className={styles.dogSkillValue}>{temperament}</span>
            </li>
            <li className={styles.dogSkill}>
              <span className={styles.dogSkillName}>
                <img className={styles.dogSkillImg} src={lifeImg} alt="Life span" />
                Life span:{' '}
              </span>
              <span className={styles.dogSkillValue}>{lifeSpan}</span>
            </li>
            <li className={styles.dogSkill}>
              <span className={styles.dogSkillName}>
                <img className={styles.dogSkillImg} src={groupImg} alt="Bred for" />
                Raised for:{' '}
              </span>
              <span className={styles.dogSkillValue}>{bredFor}</span>
            </li>
            <li className={styles.dogSkill}>
              <span className={styles.dogSkillName}>
                <img className={styles.dogSkillImg} src={breedImg} alt="Breed group" />
                Breed group:{' '}
              </span>
              <span className={styles.dogSkillValue}>{breedGroup}</span>
            </li>
            <li className={styles.dogSkill}>
              <span className={styles.dogSkillName}>
                <img className={styles.dogSkillImg} src={heightImg} alt="Height" />
                Height(cm):{' '}
              </span>
              <span className={styles.dogSkillValue}>{height.metric}</span>
            </li>

            <li className={styles.dogSkill}>
              <span className={styles.dogSkillName}>
                <img className={styles.dogSkillImg} src={weightImg} alt="weight" />
                Weight(kg):{' '}
              </span>
              <span className={styles.dogSkillValue}>{weight.metric}</span>
            </li>
            <li className={styles.dogSkill}>
              <a
                href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
                  name,
                )}&go=Go&ns0=1`}
                target="_blank"
                rel="noreferrer"
                className={styles.dogSkillLink}
              >
                <img src={linkImg} alt="Link" className={styles.dogSkillImg} />
                <span>
                  Check Wikipedia for more info about
                  {` ${name}`}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

Dog.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dog;
