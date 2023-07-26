import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
// import NotFound from "path/to/pages/NotFound";
// import ProductDetails from "path/to/pages/ProductDetails";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        {/* <Link to="/products">Products</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:productId" element={<MovieDetails />} />
          {/* <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} /> */}
        
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
    </div>
  );
};
