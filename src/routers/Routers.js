import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Movies from "../pages/movies";
import Series from "../pages/series";
import PageNotFound from "../pages/404";
import Details from "../pages/details";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/type=:type&id=:id&title=:title" element={<Details />} />
      <Route
        path="movies/type=:type&id=:id&title=:title"
        element={<Details />}
      />
      <Route
        path="series/type=:type&id=:id&title=:title"
        element={<Details />}
      />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routers;
