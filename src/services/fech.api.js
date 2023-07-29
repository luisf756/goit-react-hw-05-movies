// const movies = [
//     { id: "h-1", name: "Hoodie 1" },
//     { id: "h-2", name: "Hoodie 2" },
//     { id: "h-3", name: "Hoodie 3" },
//     { id: "s-1", name: "Sneakers 1" },
//     { id: "s-2", name: "Sneakers 2" },
//     { id: "s-3", name: "Sneakers 3" },
//     { id: "s-4", name: "Sneakers 4" },
//     { id: "p-1", name: "Pants 1" },
//     { id: "p-2", name: "Pants 2" },
//     { id: "p-3", name: "Pants 3" }
//   ];
  
//   export const getMovies = () => {
//     return movies;
//   };
  
//   export const getMovieById = (movieId) => {
//     return movies.find((movie) => movie.id === movieId);
//   };


//   const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.themoviedb.org/3/trending/movie/day', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


const BASE_URL = 'https://api.themoviedb.org/3/' ;
const API_KEY = '?api_key=42620835f02dcd78b3193c06b2ed76b5'; //9c7dd2fa31e730d5208ddae4b217ab2a

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies(page="1") {
    const PATH_PARAMS = '/trending/movie/day';
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
}

export function fetchMovies(searchQuery, page = "1") {
    const PATH_PARAMS = '/search/movie';
    const searchParams = '&language=en-US&include_adult=false';

    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${API_KEY}&query=${searchQuery}&page=${page}${searchParams}`)
}

export function fetchMovieDetails(movie_id) {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}${API_KEY}${searchParams}`)
}

export function fetchMovieCredits(movie_id) {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/credits${API_KEY}${searchParams}`)
}

export function fetchMovieReviews(movie_id, page = "1") {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
}
export function fetchMovieTrailer(movie_id, page = "1") {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/videos${API_KEY}${searchParams}&page=${page}`)
}