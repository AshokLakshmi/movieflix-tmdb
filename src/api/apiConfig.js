const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";

const COMMON_QUERY_STRING = "language=en-US&sort_by=popularity.desc";
//basic function to fetch movie/tv using props endpoint
//example-->endpoint=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1
//example-->endpoint=`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&page=1
//example-->endpoint=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1
//to get all movie genres id & name -->https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US
//to get all tv genres id & name -->https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US
//to get images posters/logos/backdrops size configuration details  -->https://api.themoviedb.org/3/configuration?api_key=${API_KEY}
const basicFetch = async (endpoint) => {
  const req = await fetch(endpoint);
  const json = await req.json();
  return json;
};
//function to fetch only movies
export const getMovieList = async (page = 1) => {
  return {
    dataList: await basicFetch(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}`
    ),
  };
};
//function to fetch only tv/series
export const getSeriesList = async (page = 1) => {
  return {
    dataList: await basicFetch(
      `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=${page}`
    ),
  };
};

export const getTrendingAll = async (type = "all", page = 1) => {
  return {
    dataList: await basicFetch(
      `${API_BASE_URL}/trending/${type}/day?api_key=${API_KEY}&${COMMON_QUERY_STRING}&${page}`
    ),
  };
};

//function to fetch all movies tv/series trending tv/movies netflix series
export const getHomePageMovieList = {
  //function to fetch only Netflix original
  getNetflixOriginal: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&${COMMON_QUERY_STRING}&page=${page}`
      ),
    };
  },
  //function to fetch only Trending Movie
  getTrendingMovieDaily: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/trending/movie/day?api_key=${API_KEY}&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Trending Tv
  getTrendingTvDaily: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/trending/tv/day?api_key=${API_KEY}&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Action Movie
  getActionMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Adventure Movie
  getAdventureMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Animation Movie
  getAnimationMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Comedy Movie
  getComedyMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Crime Movie
  getCrimeMovie: async (page = 2) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=80&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Documentary Movie
  getDocumentaryMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Drama Movie
  getDramaMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Family Movie
  getFamilyMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Fantasy Movie
  getFantasyMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=14&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only History Movie
  getHistoryMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=36&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Horror Movie
  getHorrorMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Music Movie
  getMusicMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10402&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Mystery Movie
  getMysteryMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Romance Movie
  getRomanceMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },

  //function to fetch only Sci-Fi Movie
  getScienceFictionMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Tv Movie
  getTvMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10770&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Thirller Movie
  gettThirllerMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only War Movie
  getWarMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10752&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
  //function to fetch only Western Movie
  getWesternMovie: async (page = 1) => {
    return {
      dataList: await basicFetch(
        `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37&${COMMON_QUERY_STRING}&${page}`
      ),
    };
  },
};
