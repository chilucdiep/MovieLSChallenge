import MovieCard from './MovieCard/MovieCard';
import styles from './MovieList.module.scss'

export default function MovieList({ movies, selectedGenre }) {
    const filteredMovieMarkup = movies?.map((movie, key) => {
        if (movie.genre.includes(`${selectedGenre}`)) {
            return <MovieCard movie={movie} key={key} />
        }
    })


    return (
        <>
            <p>Genre: {selectedGenre ? selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1) : 'All'}</p>
            <div className={styles.MovieList}>
                {selectedGenre ? (
                    filteredMovieMarkup
                ) : (
                    movies?.map((movie, key) => (
                        <MovieCard movie={movie} key={key} />
                    )))}
            </div>
        </>
    );
}
