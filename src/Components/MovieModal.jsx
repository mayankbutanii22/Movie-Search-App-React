import React from 'react';
import styles from './MovieModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelected } from '../Redux/moviesSlice';

const IMG = 'https://image.tmdb.org/t/p/w500';

export default function MovieModal() {
  const dispatch = useDispatch();
  const selected = useSelector(s => s.movies.selected);

  if (!selected) return null;

  return (
    <div className={styles.backdrop} onClick={() => dispatch(clearSelected())}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.inner}>
          <img
            src={selected.poster_path ? selected.poster_path : `${IMG}/placeholder.jpg`}
            alt={selected.title}
            className={styles.poster}
          />
          <div className={styles.right}>
            <h2>
              {selected.title} <span className={styles.vote}>⭐{selected.vote_average?.toFixed(1)}</span>
            </h2>
            <p className={styles.tagline}>{selected.tagline || 'No tagline available'}</p>
            <p className={styles.overview}>{selected.overview || 'No overview available'}</p>
            <div className={styles.metaRow}>
              <div>Release: {selected.release_date || 'N/A'}</div>
              <div>Runtime: {selected.runtime || 'N/A'} min</div>
              <div>Language: {selected.original_language || 'N/A'}</div>
            </div>
          </div>
        </div>
        <button className={styles.close} onClick={() => dispatch(clearSelected())}>
          Close
        </button>
      </div>
    </div>
  );
}








