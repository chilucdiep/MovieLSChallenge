import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles.Navbar}>
            <a href="/" className={styles.Logo}><h2>Jenra <span>Movies</span></h2></a>
            <a
                href="https://github.com/chilucdiep/MovieChallenge"
                target="_blank"
                rel="noreferrer"
            >
                Github
            </a>
        </div>
    );
}
