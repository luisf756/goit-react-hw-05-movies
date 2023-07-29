import TrendingMovies from '../components/TrendingMovies/TrendingMovies';
 const Home = () => {
    return (
      <main>
        <h1>Welcome</h1>
        <img src="https://via.placeholder.com/960x240" alt="" />
        <p>
          list of trending movies! 
        </p>
        <TrendingMovies/>
      </main>
    );
  };
  
  export default Home;