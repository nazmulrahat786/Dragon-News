import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id,news);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterData);
    } else {
      const filterData = data.filter((news) => news.category_id == id);
      console.log(filterData);
      setCategoryNews(filterData);
    }
  }, [data, id]);

  return (
    <div>
      <h1 className="font-bold mb-5">Total Catadory News<span className="text-secondary">{categoryNews.length}</span>
      </h1>

      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map(news =><NewsCard key={news.id} news={news}></NewsCard>)}
      </div>
    </div>
  );
};

export default CategoryNews;
