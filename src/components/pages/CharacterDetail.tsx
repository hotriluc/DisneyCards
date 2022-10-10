import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICharacter } from '../../interfaces/Character.interface';

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

  return <div>{character?._id}</div>;
};

export default CharacterDetail;
