import React from 'react';

import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearch } from 'components/redux/filter.slice';
import { filterSelector } from 'components/redux/selectors';

const Filter = () => {
  const filter = useSelector(filterSelector)
  
  const dispatch = useDispatch()

  const handleChange = event => {
    dispatch(filterSearch(event.target.value));
  };

  return (
    <div className={css.filterWrapper}>
      <p className={css.filterText}>Find contact by name</p>
      <label htmlFor="">
        <input
          className={css.filterInput}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};



export default Filter;
