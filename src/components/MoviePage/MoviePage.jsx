import { useState } from 'react';
// import movieInfo from '../../content.json'
// import GenreInput from "./GenreInput/GenreInput";
import styles from './MoviePage.module.scss'

export default function MovieList() {
    const [movies, setmovies] = useState(null);
    // console.log(movieInfo.main_title)

    return (
        <div className={styles.MoviePage}>
        ok
            {/* <h1>{movieInfo.main_title}</h1>
            <h3>{movieInfo.filter_text}</h3> */}
            {/* <GenreInput /> */}
            {/* <MovieList /> */}
        </div>
    );
}
