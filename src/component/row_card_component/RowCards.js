import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

function RowCards({ fetchUrl, type }) {
  const [homeMovieList, setHomeMovieList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchUrl();
      const data = response.dataList;
      setHomeMovieList(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="row__cards">
      {homeMovieList &&
        homeMovieList.length &&
        homeMovieList.map((homeList) => {
          return (
            <SingleCard homeList={homeList} type={type} key={homeList.id} />
          );
        })}
    </div>
  );
}

export default RowCards;
