import React from 'react';
import classes from './CharactersList.module.css';

const CharactersList = (props: { data: Array<any> }) => {
  console.log(props.data);
  return (
    <div className={classes.grid}>
      {props.data.map((char) => (
        <div key={char._id} className={classes.character}>
          <div className={classes['img-holder']}>
            <img src={char.imageUrl} alt="no-img" className={classes.img} />
          </div>
          <p>{char.name}</p>
        </div>
      ))}
    </div>
  );
};
export default CharactersList;
