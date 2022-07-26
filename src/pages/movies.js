import { getMovieList, getTrendingAll } from "../api/apiConfig";
import { useEffect, useState } from "react";
import Loader from "../component/loader/Loader";
import SingleCard from "../component/row_card_component/SingleCard";
import BannerComponent from "../component/banner_component/BannerComponent";
import InfiniteScroll from "react-infinite-scroll-component";
function Movies() {
  const [moviePageList, setMoviePageList] = useState([]);
  const [noMore, setNoMore] = useState(true);
  const [page, setPage] = useState(1);
  const totalPages = 500;
  const fetchData = async () => {
    const response = await getMovieList(page);
    const data = response.dataList;
    setTimeout(() => {
      setMoviePageList((oldData) => [...oldData, ...data.results]);
      setPage(page + 1);
      if (page === totalPages) {
        setNoMore(false);
      }
    }, 2500);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(moviePageList);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getTrendingAll("movie");
      const data = response.dataList;
      console.log(response.dataList.results);
      setTrending(data.results[Math.floor(Math.random() * 20)]);
    }
    fetchData();
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={moviePageList.length} //This is important field to render the next data
        next={fetchData}
        hasMore={noMore}
        loader={<Loader />}
        scrollThreshold="100%"
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <BannerComponent trending={trending} />

        <div className="movies__page pages">
          {moviePageList &&
            moviePageList.length &&
            moviePageList.map((movieList, index) => {
              return (
                <SingleCard homeList={movieList} type="movie" key={index} />
              );
            })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Movies;
