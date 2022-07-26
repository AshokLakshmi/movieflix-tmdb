import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function BannerComponent({ trending }) {
  return (
    <LazyLoadComponent>
      <div
        className="banner"
        style={
          trending.backdrop_path
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${trending.backdrop_path})`,
              }
            : null
        }
      >
        <div className="banner__contents">
          <h1 className="banner__title">{trending.title || trending.name}</h1>
          <div className="banner__rating">
            <h1>{trending.release_date || trending.first_air_date}</h1>
            <h1>
              <AiFillStar /> {Number(trending.vote_average).toFixed(1)}
            </h1>
          </div>

          <h1 className="banner__description">{trending.overview}</h1>
          <div className="banner__buttons">
            <Link
              to={`type=${trending.media_type}&id=${trending.id}&title=${
                trending.title || trending.name
              }`}
            >
              <button className="banner__button">More</button>
            </Link>
          </div>
        </div>
      </div>
    </LazyLoadComponent>
  );
}

export default BannerComponent;
