import "../styles/details.style.css";
import { useParams } from "react-router-dom";
import getMovieInfo from "../api/getMovieInfo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cast from "../component/details_component/Cast";

function Details() {
  const [info, setInfo] = useState([]);
  const [images, setImages] = useState([]);
  const [cast, setCast] = useState([]);
  const [videos, setvideos] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [similar, setSimilar] = useState([]);

  const { type, id } = useParams();
  useEffect(() => {
    async function fetchDetails() {
      const response = await getMovieInfo(id, type);
      const { info, images, castCrew, videos, recommendations, similar } =
        response;
      setInfo(info);
      setImages(images);
      setCast(castCrew);
      setvideos(videos);
      setRecommendations(recommendations);
      setSimilar(similar);
    }
    fetchDetails();
  }, []);

  //console.log(info);
  return (
    <div className="selected__movie_page">
      <div
        className="selected__movie_banner"
        style={
          info.backdrop_path
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${info.backdrop_path})`,
              }
            : null
        }
      ></div>
      <div className="selected__movie_info">
        <div className="selected__movie_poster">
          <img
            src={
              info.poster_path
                ? `https://image.tmdb.org/t/p/original/${info.poster_path}`
                : null
            }
            alt={info.name || info.title}
          />
        </div>
        <div className="selected__movie_title">
          <h3>{info.tagline}</h3>
          <h1>{info.name || info.title}</h1>
          <p>Release On : {info.release_date}</p>
          <p>{info.overview}</p>
          <Cast cast={cast.cast} />
        </div>
      </div>
    </div>
  );
}

export default Details;
