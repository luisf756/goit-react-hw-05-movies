import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
// import MovieDetails from "../pages/MovieDetails";
import { Container, Header, Logo, Link } from "./app.styled";
// import ProductDetails from "path/to/pages/ProductDetails";

export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Container>
        <Header>
          <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Filmoteka
          </Logo>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        {/* <Route path="/movies/:productId" element={<MovieDetails />} /> */}
          {/* <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} /> */}
        
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
     
    </div>
  );
};
