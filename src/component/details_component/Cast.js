import { LazyLoadImage } from "react-lazy-load-image-component";
function Cast({ cast }) {
  console.log(cast);
  return (
    <div className="selected__movie_cast">
      {cast &&
        cast.map((person) => {
          return (
            <div className="selected__movie_cast_single" key={person.cast_id}>
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                effect="blur"
                height="100%"
                width="100%"
              />
              <div className="selected__movie_cast_name">
                {person.name} <span>as </span>
                {person.character}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cast;
