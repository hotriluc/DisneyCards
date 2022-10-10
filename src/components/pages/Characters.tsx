import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [charactersData, setCharactersData] = useState<Array<ICharacter>>([]);
  const [pagination, setPagination] = useState<IPagination>();

  const page = searchParams.get('page');

  // Fetching characters from the server
  const fetchData = (apiUrl = 'https://api.disneyapi.dev/characters') => {
    // If query params exists add it to the request url
    if (page) {
      apiUrl += `?page=${page}`;
    }

    axios.get(apiUrl).then((res) => {
      const { data, count, totalPages, previousPage, nextPage } = res.data;
      setCharactersData(data);
      setPagination({ count, totalPages, previousPage, nextPage });
    });
  };

  // get characters
  useEffect(() => {
    fetchData();
  }, [page]);

  const changePage = (pageURL: string) => {
    const pageParams = new URL(pageURL).searchParams;
    const pageToChange = pageParams.get('page');

    setSearchParams(`page=${pageToChange}`);
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
