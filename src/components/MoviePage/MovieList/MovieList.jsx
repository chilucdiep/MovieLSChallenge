import MovieCard from './MovieCard/MovieCard';
import styles from './MovieList.module.scss'

export default function MovieList({ movies }) {

    return (
        <div className={styles.MovieList}>
            {movies?.map((movie, key) => (
                <MovieCard movie={movie} key={key} />
            ))}
        </div>
    );
}
