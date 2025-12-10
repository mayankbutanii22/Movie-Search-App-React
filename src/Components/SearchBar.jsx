import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { setQuery, setPage, fetchMovies } from '../Redux/moviesSlice';

export default function SearchBar() {
  const [val, setVal] = useState('');
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(setQuery(val));
    dispatch(setPage(1));
    dispatch(fetchMovies());
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <input
        className={styles.input}
        placeholder="Search movies..."
        value={val}
        onChange={e => setVal(e.target.value)}
      />
      <button className={styles.btn} type="submit">Search</button>
    </form>
  );
}

