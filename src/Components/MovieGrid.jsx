import React from 'react';
import { useSelector } from 'react-redux';
import styles from './MovieGrid.module.css';
import MovieCard from './MovieCard.jsx';


export default function MovieGrid(){
const { items, status, error } = useSelector(s => s.movies);


if(status === 'loading') return <div className={styles.message}>Loading...</div>;
if(status === 'failed') return <div className={styles.message}>Error: {error}</div>;
if(!items || items.length === 0) return <div className={styles.message}>No results</div>;


return (
<div className={styles.grid}>
{items.map(m => <MovieCard key={m.id} movie={m} />)}
</div>
);
}