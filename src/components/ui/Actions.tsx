import React from 'react';
import { IPagination } from '../../interfaces/Pagination.interface';

import classes from './Actions.module.css';

interface ActionProps {
  paginationData: IPagination;
  fn: (page: string) => void;
}

const Actions = ({ paginationData, fn }: ActionProps): JSX.Element => {
  return (
    <div className={classes.actions}>
      <button
        className={classes.btn}
        onClick={() => fn(paginationData.previousPage)}
        disabled={!paginationData.previousPage}
      >
        Previous
      </button>
      <p className={classes['page-number']}>{paginationData.currentPage}</p>
      <button
        className={classes.btn}
        onClick={() => fn(paginationData.nextPage)}
        disabled={!paginationData.nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Actions;
