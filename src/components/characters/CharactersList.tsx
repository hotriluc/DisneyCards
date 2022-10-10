import React from 'react';
import { Link } from 'react-router-dom';
import { ICharacter } from '../../interfaces/Character.interface';
import classes from './CharactersList.module.css';

const CharactersList = (props: { data: Array<ICharacter> }) => {
  return (
    <div className={classes.grid}>
      {props.data.map((character) => (
        <Link
          to={`${character._id}`}
          key={character._id}
          className={classes.character}
        >
          <div className={classes['img-holder']}>
            <img
              src={character.imageUrl}
              alt="no-img"
              className={classes.img}
            />
          </div>
          <p className={classes['name']}>{character.name}</p>
        </Link>
      ))}
    </div>
  );
};
export default CharactersList;
