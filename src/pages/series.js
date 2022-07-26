import Loader from "../component/loader/Loader";
import { getSeriesList, getTrendingAll } from "../api/apiConfig";
import { useEffect, useState } from "react";
import SingleCard from "../component/row_card_component/SingleCard";
import BannerComponent from "../component/banner_component/BannerComponent";
import InfiniteScroll from "react-infinite-scroll-component";
function Series() {
  const [seriesPageList, setSeriesPageList] = useState([]);
  const [noMore, setNoMore] = useState(true);
  const [page, setPage] = useState(1);
  const totalPages = 500;
  const fetchData = async () => {
    const response = await getSeriesList();
    const data = response.dataList;

    setTimeout(() => {
      setSeriesPageList((oldData) => [...oldData, ...data.results]);
      setPage(page + 1);
      if (page === totalPages) {
        setNoMore(false);
      }
    }, 2500);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getTrendingAll("tv");
      const data = response.dataList;
      console.log(response.dataList.results);
      setTrending(data.results[Math.floor(Math.random() * 20)]);
    }
    fetchData();
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={seriesPageList.length} //This is important field to render the next data
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
        <div className="series__page pages">
          {seriesPageList &&
            seriesPageList.length &&
            seriesPageList.map((seriesList, index) => {
              return <SingleCard homeList={seriesList} type="tv" key={index} />;
            })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Series;
