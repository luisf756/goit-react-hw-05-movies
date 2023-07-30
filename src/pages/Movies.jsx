// import { Link, Outlet } from "react-router-dom";

//  const About = () => {

//   return (
//     <div>
//       <h2>Find movie</h2>
      
//     </div>
//   );
// };

// export default About

import { useSearchParams } from "react-router-dom";
// import { ProductList } from "../components/ProductList";
import { SearchBox } from "../components/SearchBox/SearchBox";
// import { getProducts } from "../fakeAPI";

const Movies = () => {
  // const movies = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  // const movieName = searchParams.get("name") ?? "";

  // const visibleMovies = products.filter((product) =>
  //   product.name.toLowerCase().includes(productName.toLowerCase())
  // );

  // const updateQueryString = (name) => {
  //   const nextParams = name !== "" ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <main>
      {/* <SearchBox value={movieName} onChange={updateQueryString} /> */}
      {/* <ProductList products={visibleProducts} /> */}
    </main>
  );
};
export default Movies;