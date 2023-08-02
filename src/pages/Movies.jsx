
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import { useSearchParams } from "react-router-dom";
import { SearchBox } from "../components/SearchBox/SearchBox";
import SearchedMovies from '../components/SearchedMovies/SearchedMovies';


const Movies = () => {
  
  const [searchParams, setSearchParams] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') ?? '';


  // const updateQueryString = (name) => {
  //   const nextParams = name !== "" ? { name } : {};
  //   setSearchParams(nextParams);
    
  // };
  const handleSummit = searchQueryValue => {
    if (searchParams === searchQueryValue) {
        return //toast.info("Input new search query.");
    }
  
    navigate(`${location.pathname}?query=${searchQueryValue}`);
  
    setSearchParams(searchQueryValue);
  }
  
  useEffect(() => {
    if (query !== '') {
      setSearchParams(query);
    }
  }, [query])
  // console.log(searchParams)
//value={movieName}
  return (
    <main>
      <h2>Find movie</h2>
      <SearchBox  onChange={handleSummit} /> 
      
      <SearchedMovies searchQuery={ searchParams }/>
    </main>
  );
};
export default Movies;