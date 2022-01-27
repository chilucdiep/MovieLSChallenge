import { useState } from 'react';
import { movieInfo, movies } from '../../movieContent.js'
import GenreInput from "./GenreInput/GenreInput";
import MovieList from "./MovieList/MovieList";
import styles from './MoviePage.module.scss'

export default function MoviePage() {
    const [oo, setmovies] = useState(null);
    const { main_title, filter_text } = movieInfo
    console.log(main_title)

    return (
        <div className={styles.MoviePage}>
            <div className={styles.Header}>
                <h1>{main_title}</h1>
                <h3>{filter_text}</h3>

            </div>
            <GenreInput movies={movies} />
            <MovieList movies={movies} />
        </div>
    );
}
