import React, { use } from 'react';
import Marquee from 'react-fast-marquee';
const newstital = fetch('/news.json').then(res => res.json());
const LatestNews = () => {
  const data = use(newstital);
  console.log(data);
  const filtrTitle = data.filter(title => title.category_id == '2');
  console.log(filtrTitle);
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5 cursor-pointer" pauseOnHover={true}>
        {filtrTitle.map(titl => (
          <p className="font-bold px-2 hover:underline hover:text-secondary">
            {titl.title} .
          </p>
        ))}

      
      </Marquee>
    </div>
  );
};

export default LatestNews;
