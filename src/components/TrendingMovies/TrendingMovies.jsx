import { useState, useEffect } from 'react';
import MoviesList from '../ListOfMovies/ListOfMovie';
import MoviesListItem from '../MovieListItem/MoviesListItem';
import normalizedData from '../../services/normalizedData';
import { fetchTrendingMovies } from '../../services/fech.api';
// import s from './TrendingMovies.module.css';

export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(data => {
                console.log(data)
                setMovies(normalizedData(data.results));
            });
    }, [])

    return <MoviesList>
        <MoviesListItem data={movies} />
    </MoviesList>
}