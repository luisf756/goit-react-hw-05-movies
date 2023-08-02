import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import MoviesList from '../ListOfMovies/ListOfMovie';
import MoviesListItem from '../MovieListItem/MoviesListItem';
import normalizedData from '../../services/normalizedData';
import { fetchMovies } from '../../services/fech.api';
// import s from './SearchedMovies.module.css';

export default function SearchedMovies({searchQuery}) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        if (searchQuery === '') {
            return;
        }
        // console.log(movieName)
        fetchMovies(searchQuery)
            .then(data => { 
                if (data.total_results > 0) {
                setMovies(normalizedData(data.results));
                }
                
                else {
                    setMovies([]);
                    // return toast.error("Sorry, there are no images matching your search query. Please try again.");
                }
            });
}, [searchQuery])

    return (
    <MoviesList>
        <MoviesListItem data={movies} />
    </MoviesList>)

}
SearchedMovies.propTypes = {
    searchQuery: PropTypes.string,
}