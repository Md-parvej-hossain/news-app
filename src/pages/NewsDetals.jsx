import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import NewsDetalsCard from '../components/NewsDetalsCard';
import RightAsid from '../components/RightAsid';
import { useEffect, useState } from 'react';

const NewsDetals = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const [news, setNews] = useState({})
  useEffect(() => {
    const newsDetals = data.find((singaleDts) => singaleDts.id == id)
    setNews(newsDetals);
  },[data,id])
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-bold"> News Detald</h2>
          <NewsDetalsCard news={news}></NewsDetalsCard>
        </section>
        <aside className="col-span-3">
          <RightAsid></RightAsid>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetals;
