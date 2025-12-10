import React from 'react';
import styles from './MovieCard.module.css';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../Redux/moviesSlice';

const IMG_BASE = 'https://image.tmdb.org/t/p/w342';


export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  return (
    <article className={styles.card} onClick={() => dispatch(selectMovie(movie))} role="button" tabIndex={0}>
      <div className={styles.posterWrap}>
        {movie.poster_path ? (
          <img src={`${IMG_BASE}${movie.poster_path}`} alt={movie.title} className={styles.poster} />
        ) : (
          <div className={styles.noPoster}>No Image</div>
        )}
      </div>
      <div className={styles.meta}>
        <h3 className={styles.title}>{movie.title}</h3>
        <div className={styles.row}>
          <div className={styles.rating}>⭐ {movie.vote_average?.toFixed(1)}</div>
          <div className={styles.year}>{(movie.release_date || '').slice(0,4)}</div>
        </div>
      </div>
    </article>
  );
}


