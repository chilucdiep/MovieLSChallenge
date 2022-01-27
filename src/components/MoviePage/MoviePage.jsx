import { useState } from 'react';
import { movieInfo } from '../../movieContent.js'
import GenreInput from "./GenreInput/GenreInput";
import styles from './MoviePage.module.scss'

export default function MovieList() {
    const [movies, setmovies] = useState(null);
    console.log(movieInfo)

    return (
        <div className={styles.MoviePage}>
            <h1>{movieInfo.main_title}</h1>
            <h3>{movieInfo.filter_text}</h3>
            <GenreInput />
            {/* <MovieList /> */}
        </div>
    );
}
