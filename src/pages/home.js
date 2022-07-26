import BannerComponent from "../component/banner_component/BannerComponent";
import RowCardContainer from "../component/row_card_component/RowCardContainer";
import "../styles/home.style.css";
import homePageArray from "../api/apiHomePageArray";
import { useEffect, useState } from "react";
import { getTrendingAll } from "../api/apiConfig";

function Home() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getTrendingAll();
      const data = response.dataList;
      console.log(response.dataList.results);
      setTrending(data.results[Math.floor(Math.random() * 20)]);
    }
    fetchData();
  }, []);
  return (
    <>
      <BannerComponent trending={trending} />
      <div className="home__page">
        {homePageArray.map(({ title, type, fetchUrl }, index) => {
          return (
            <RowCardContainer
              title={title}
              type={type}
              fetchUrl={fetchUrl}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
