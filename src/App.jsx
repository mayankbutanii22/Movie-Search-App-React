import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import Header from './Components/Header.jsx';
import SearchBar from './Components/SearchBar.jsx';
import MovieGrid from './Components/MovieGrid.jsx';
import Pagination from './Components/Pagination.jsx';
import MovieModal from './Components/MovieModal.jsx';
import { fetchMovies } from './Redux/moviesSlice';


export default function App(){
const dispatch = useDispatch();
const { query, page } = useSelector(s => s.movies);


useEffect(()=>{
dispatch(fetchMovies());
}, [dispatch, query, page]);


return (
<div className={styles.app}>
<div className="container">
<Header />
<SearchBar />
<MovieGrid />
<Pagination />
</div>
<MovieModal />
</div>
);
}

