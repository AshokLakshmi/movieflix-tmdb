const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const COMMON_STRING = "language=en-US";

// basic fetch function to fetch all details related to a tv/movies
const basicFetch = async (endpoint) => {
  const req = await fetch(endpoint);
  const json = await req.json();
  return json;
};
// get movie details using movie id-->https://api.themoviedb.org/3/movie/{movie_id}?api_key=7e02bfeb1809b6e4a59a98a099130b86&language=en-US;
// get tv/series details using tv id-->https://api.themoviedb.org/3/tv/{tv_id}?api_key=7e02bfeb1809b6e4a59a98a099130b86&language=en-US;
// poster/logo/backdrops look like this-->backdrops="/gk1enrMtCVABqJd4ujVwIIeswTT.jpg"
//complete images path--->https://image.tmdb.org/t/p/w500/${poster_path/backdrops/profile_path}
// video key look like this-->key="tcrNsIaQkb4"
//complete video path--->https://youtube.com/embed/${file_path/key}
// main fetch function to get details about a movie/tv with props id=movieid/tvid & type=tv/movie
const getMovieInfo = async (id, type) => {
  let info = {};
  let castCrew = {};
  let images = {};
  let recommendations = {};
  let similar = {};
  let videos = {};
  //if id is available then-->
  if (id) {
    info = await basicFetch(
      `${API_BASE_URL}/${type}/${id}?api_key=${API_KEY}&${COMMON_STRING}`
    );
    //fetch movie credits--> cast & crew
    castCrew = await basicFetch(
      `${API_BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}&${COMMON_STRING}`
    );
    //fetch  all images of a movie
    images = await basicFetch(
      `${API_BASE_URL}/${type}/${id}/images?api_key=${API_KEY}`
    );
    //fetch  all recommended movie based on this movie genres
    recommendations = await basicFetch(
      `${API_BASE_URL}/${type}/${id}/recommendations?api_key=${API_KEY}&${COMMON_STRING}`
    );
    //fetch  all similar movie based on this movie genres
    similar = await basicFetch(
      `${API_BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&${COMMON_STRING}`
    );
    //fetch  all video related to this movie trailers/clips/video
    videos = await basicFetch(
      `${API_BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&${COMMON_STRING}`
    );

    //fetch  all video related to this tv trailers/clips/video
  }
  return { info, castCrew, images, recommendations, similar, videos };
};

export const getCollection = async (collection_id) => {
  return {
    dataList: await basicFetch(
      `${API_BASE_URL}/collection/${collection_id}?api_key=${API_KEY}&${COMMON_STRING}`
    ),
  };

  //https://api.themoviedb.org/3/collection/{collection_id}?api_key=<<api_key>>&language=en-US
};
export default getMovieInfo;
