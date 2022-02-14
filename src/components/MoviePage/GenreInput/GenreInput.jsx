import { useState } from 'react';
import styles from './GenreInput.module.scss'

export default function GenreInput({ movies, setSelectedGenre }) {
    const [age, setAge] = useState('');

    let array = movies?.map((movie) => (
        movie.genre.map((oneGenre) => (oneGenre))
    ))

    const duplicateMoviesArray = [].concat(...array); //2D array to 1D array
    const genreArray = [... new Set(duplicateMoviesArray)]

    console.log(genreArray)

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={styles.GenreInput}>
            {genreArray.map((genre, key) => (
                <button key={key} onClick={() => setSelectedGenre(genre)} >{genre}</button>
            ))}
            <button onClick={() => setSelectedGenre('')}>All</button>
        </div>

    );
}
