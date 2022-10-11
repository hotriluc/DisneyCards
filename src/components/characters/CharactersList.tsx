import React from 'react';
// import { Link } from 'react-router-dom';
import { ICharacter } from '../../interfaces/Character.interface';
import classes from './CharactersList.module.css';

import { animated, useTransition } from 'react-spring';
import { Link } from 'react-router-dom';

const CharactersList = (props: { data: Array<ICharacter> }) => {
  const transitions = useTransition(props.data, {
    from: { y: -50, opacity: 0, 'pointer-events': 'none' },
    enter: { y: 0, opacity: 1, 'pointer-events': 'auto' },
    trail: 100,
  });

  return (
    <div className={classes.grid}>
      {transitions((props, item) => (
        <animated.div style={props}>
          <Link to={`${item._id}`} key={item._id} className={classes.character}>
            <div className={classes['img-holder']}>
              <img src={item.imageUrl} alt="no-img" className={classes.img} />
            </div>
            <p className={classes['name']}>{item.name}</p>
          </Link>
        </animated.div>
      ))}
    </div>
  );
};
export default CharactersList;
