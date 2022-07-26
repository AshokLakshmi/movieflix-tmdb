import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import {
  LazyLoadImage,
  trackWindowScroll,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function SingleCard({ homeList, type }) {
  const {
    first_air_date,
    release_date,
    name,
    poster_path,
    vote_average,
    original_title,
    id,
  } = homeList;

  return (
    <LazyLoadComponent key={id}>
      <Link to={`type=${type}&id=${id}&title=${original_title || name}`}>
        <motion.div
          whileHover={{
            scale: 0.96,
            transition: { duration: 0.6 },
          }}
          className="single__card"
        >
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={name}
            effect="blur"
            height="100%"
            width="100%"
          />
          <div className="single__card_detail">
            <h3> {name || original_title}</h3>
            <p>
              <span>{first_air_date || release_date}</span>
              <span>
                <AiFillStar />
                {Number(vote_average).toFixed(1)}
              </span>
            </p>
          </div>
        </motion.div>
      </Link>
    </LazyLoadComponent>
  );
}

export default trackWindowScroll(SingleCard);
