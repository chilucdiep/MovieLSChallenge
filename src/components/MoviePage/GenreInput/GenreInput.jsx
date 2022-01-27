import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './GenreInput.module.scss'

export default function GenreInput({ movies }) {
    const [age, setAge] = useState('');
    const [genreArray, setGenreArray] = useState([]);

    movies?.map((movie, key) => {
        movie.genre.map((oneGenre) => {
            console.log(oneGenre)
            // if (genreArray.includes(oneGenre)) return null
            // if (!genreArray.includes(oneGenre)) {
            //     setGenreArray(...genreArray, oneGenre)
            //     return console.log(genreArray)
            // }
return
        })
    })

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={styles.GenreInput}>
            <Box sx={{ minWidth: 400 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Movie Genre"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}
