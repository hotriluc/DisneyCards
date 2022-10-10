import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ICharacter } from '../../interfaces/Character.interface';
import { IPagination } from '../../interfaces/Pagination.interface';
import CharactersList from '../characters/CharactersList';
import Actions from '../ui/Actions';
// import CharactersList from '../characters/CharactersList';

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
      setPagination({
        count,
        totalPages,
        previousPage,
        nextPage,
        currentPage: page || '1',
      });
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

  return (
    <div>
      <CharactersList data={charactersData} />
      {pagination && <Actions paginationData={pagination} fn={changePage} />}
    </div>
  );
};

export default Characters;
