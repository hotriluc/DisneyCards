import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ICharacter } from '../../interfaces/Character.interface';
import CharactersList from '../characters/CharactersList';
// import CharactersList from '../characters/CharactersList';

export interface IPagination {
  count: number;
  totalPages: number;
  previousPage: string;
  nextPage: string;
}

const Characters = (): JSX.Element => {
  const [charactersData, setCharactersData] = useState<Array<ICharacter>>([]);
  const [pagination, setPagination] = useState<IPagination>();

  const fetchData = (apiUrl = 'https://api.disneyapi.dev/characters') => {
    axios.get(apiUrl).then((res) => {
      const { data, count, totalPages, previousPage, nextPage } = res.data;
      setCharactersData(data);
      setPagination({ count, totalPages, previousPage, nextPage });
    });
  };

  // get characters
  useEffect(() => {
    fetchData();
  }, []);

  const changePage = (page: string) => {
    fetchData(page);
  };

  const paginationJSX = (
    <div>
      {pagination?.previousPage ? (
        <button onClick={() => changePage(pagination.previousPage)}>
          {' '}
          prev
        </button>
      ) : null}
      {pagination?.nextPage ? (
        <button onClick={() => changePage(pagination.nextPage)}> next</button>
      ) : null}
    </div>
  );
  return (
    <div>
      <CharactersList data={charactersData} />
      {paginationJSX}
    </div>
  );
};

export default Characters;
