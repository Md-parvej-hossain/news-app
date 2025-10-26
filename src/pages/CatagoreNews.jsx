import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CatagoreNews = () => {
  const { id } = useParams();
  const allData = useLoaderData();

  const [categoreNews, setCategoreNews] = useState([]);
  // const filterData = allData.filter(news => news.category_id == id);
  // console.log(filterData);
  useEffect(() => {
    if (id == '0') {
      setCategoreNews(allData);
      return;
    } else if (id == '1') {
      const filterData = allData.filter(
        news => news.others.is_today_pick == true
      );
      setCategoreNews(filterData);
    } else {
      const filterData = allData.filter(news => news.category_id == id);
      setCategoreNews(filterData);
    }
  }, [allData, id]);
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 gap-4">
        {categoreNews.map(news => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagoreNews;
