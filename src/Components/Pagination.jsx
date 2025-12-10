import React from 'react';
import styles from './Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../Redux/moviesSlice';


export default function Pagination(){
const dispatch = useDispatch();
const { page, total_pages } = useSelector(s => s.movies);


const prev = ()=>{ if(page>1) dispatch(setPage(page-1)) }
const next = ()=>{ if(page < total_pages) dispatch(setPage(page+1)) }


if(total_pages <= 1) return null;


return (
<div className={styles.wrap}>
<button className={styles.btn} onClick={prev} disabled={page===1}>Prev</button>
<div className={styles.info}>Page {page} / {total_pages}</div>
<button className={styles.btn} onClick={next} disabled={page===total_pages}>Next</button>
</div>
);
}