import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICharacter } from '../../interfaces/Character.interface';
import classes from './CharacterDetail.module.css';

const CharacterDetail = (): JSX.Element => {
  const params = useParams();
  const { id } = params;

  const [character, setCharacter] = useState<ICharacter>();

  const fetchCharacterDetails = () => {
    if (id) {
      axios.get(`https://api.disneyapi.dev/characters/${id}`).then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      });
    }
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, [id]);

  let films = <p>No Films</p>;
  let tvShows = <p>No TV Shows</p>;
  let videoGames = <p>No Video games</p>;

  if (character?.films.length) {
    films = (
      <ul>
        {character.films.map((film, id) => (
          <li key={id}>{film}</li>
        ))}
      </ul>
    );
  }

  if (character?.tvShows.length) {
    tvShows = (
      <ul>
        {character.tvShows.map((show, id) => (
          <li key={id}>{show}</li>
        ))}
      </ul>
    );
  }

  if (character?.videoGames.length) {
    videoGames = (
      <ul>
        {character.videoGames.map((game, id) => (
          <li key={id}>{game}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className={classes.character}>
      <div className={classes['info']}>
        <h1>{character?.name || ''}</h1>
        <div className={classes['img-holder']}>
          <img src={character?.imageUrl} className={classes['img']} alt="" />
        </div>
      </div>

      <div className={classes['references']}>
        <div>
          <h2>Films</h2>
          {films}
        </div>
        <div>
          <h2>TV Shows</h2>
          {tvShows}
        </div>
        <div>
          <h2>Video games</h2>
          {videoGames}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
