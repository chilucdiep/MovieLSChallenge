import styles from './MovieCard.module.scss'

export default function MovieCard({ movie, key }) {
    const movieMarkup = movie ? (
        <div className={styles.MovieCard} key={key}>
            <img src={require(`../../../../images/${movie.image_name}`)} alt="Movie Posters" key={key}></img>
            <div className={styles.Text}>
                <h2>{movie.title}</h2>
                <p className={styles.Genre}>{movie.genre.join(', ')}</p>
                <div className={styles.Plot}>
                    <p>{movie.plot}</p>
                </div>
                <div className={styles.Link}>
                    <a href={movie.link} target="_blank" rel="noreferrer" >More info</a>
                </div>

            </div>
        </div>
    ) : null

    return <>{movieMarkup}</>;
}
