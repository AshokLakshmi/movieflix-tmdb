import { getHomePageMovieList } from "./apiConfig";

const homePageArray = [
  {
    title: "Netflix Original",
    fetchUrl: getHomePageMovieList.getNetflixOriginal,
    type: "tv",
  },
  {
    title: "Trending Movie Today",
    fetchUrl: getHomePageMovieList.getTrendingMovieDaily,
    type: "movie",
  },
  {
    title: "Trending Series Today",
    fetchUrl: getHomePageMovieList.getTrendingTvDaily,
    type: "tv",
  },
  {
    title: "Action",
    fetchUrl: getHomePageMovieList.getActionMovie,
    type: "movie",
  },
  {
    title: "Animation",
    fetchUrl: getHomePageMovieList.getAnimationMovie,
    type: "movie",
  },
  {
    title: "Adventure",
    fetchUrl: getHomePageMovieList.getAdventureMovie,
    type: "movie",
  },
  {
    title: "Comedy",
    fetchUrl: getHomePageMovieList.getComedyMovie,
    type: "movie",
  },
  {
    title: "Crime",
    fetchUrl: getHomePageMovieList.getCrimeMovie,
    type: "movie",
  },
  {
    title: "Documentary",
    fetchUrl: getHomePageMovieList.getDocumentaryMovie,
    type: "movie",
  },
  {
    title: "Drama",
    fetchUrl: getHomePageMovieList.getDramaMovie,
    type: "movie",
  },
  {
    title: "Family",
    fetchUrl: getHomePageMovieList.getFamilyMovie,
    type: "movie",
  },
  {
    title: "Fantasy",
    fetchUrl: getHomePageMovieList.getFantasyMovie,
    type: "movie",
  },
  {
    title: "Horror",
    fetchUrl: getHomePageMovieList.getHorrorMovie,
    type: "movie",
  },
  {
    title: "History",
    fetchUrl: getHomePageMovieList.getHistoryMovie,
    type: "movie",
  },
  {
    title: "Music",
    fetchUrl: getHomePageMovieList.getMusicMovie,
    type: "movie",
  },
  {
    title: "Mystery",
    fetchUrl: getHomePageMovieList.getMysteryMovie,
    type: "movie",
  },
  {
    title: "Romance",
    fetchUrl: getHomePageMovieList.getRomanceMovie,
    type: "movie",
  },
  {
    title: "Sci-Fi",
    fetchUrl: getHomePageMovieList.getScienceFictionMovie,
    type: "movie",
  },
  {
    title: "Thirller",
    fetchUrl: getHomePageMovieList.gettThirllerMovie,
    type: "movie",
  },
  {
    title: "War",
    fetchUrl: getHomePageMovieList.getWarMovie,
    type: "movie",
  },
  {
    title: "Tv Movie",
    fetchUrl: getHomePageMovieList.getTvMovie,
    type: "movie",
  },
  {
    title: "Western",
    fetchUrl: getHomePageMovieList.getWesternMovie,
    type: "movie",
  },
];

export default homePageArray;
