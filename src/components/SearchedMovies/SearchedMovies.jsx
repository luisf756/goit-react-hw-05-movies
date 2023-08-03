import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import MoviesList from '../ListOfMovies/ListOfMovie';
import MoviesListItem from '../MovieListItem/MoviesListItem';
import normalizedData from '../../services/normalizedData';
import { fetchMovies } from '../../services/fech.api';


export default function SearchedMovies({searchQuery}) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        if (searchQuery === '') {
            return;
        }
        
        fetchMovies(searchQuery)
            .then(data => { 
                if (data.total_results > 0) {
                setMovies(normalizedData(data.results));
                }
                
                else {
                    setMovies([]);
                    Notiflix.Report.info(
                        'Sorry, data is empty',
                        ' You can change your Search',
                        'Got it!'
                      );
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