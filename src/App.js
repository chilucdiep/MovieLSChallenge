import styles from "./App.module.scss";

import Navbar from './components/Navbar/Navbar'
import MoviePage from "./components/MoviePage/MoviePage";

export default function App() {
  return (
    <div className={styles.Container}>
      <Navbar />
      <MoviePage />
    </div>
  );
}
