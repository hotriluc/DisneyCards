import React from 'react';
import { ICharacter } from '../../interfaces/Character.interface';
import classes from './CharactersList.module.css';

const CharactersList = (props: { data: Array<ICharacter> }) => {
  console.log(props.data);
  return (
    <div className={classes.grid}>
      {props.data.map((character) => (
        <div key={character._id} className={classes.character}>
          <div className={classes['img-holder']}>
            <img
              src={character.imageUrl}
              alt="no-img"
              className={classes.img}
            />
          </div>
          <p className={classes['name']}>{character.name}</p>
        </div>
      ))}
    </div>
  );
};
export default CharactersList;
