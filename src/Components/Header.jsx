import React from 'react';
import styles from './Header.module.css';


export default function Header(){
return (
<header className={styles.header}>
<div className={styles.brand}>
<div className={styles.logo}>PG</div>
<div>
<h1 className={styles.title}>Movie Search</h1>
<p className={styles.subtitle}>Search movies from TMDB</p>
</div>
</div>
</header>
);
}