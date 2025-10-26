import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router';
const NewsDetalsCard = ({ news }) => {
  const { image_url, details, title, category_id } = news;
  return (
    <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div>
        <img
          src={image_url}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p className="text-sm dark:text-gray-600">{details}</p>
      </div>
      <div>
        <Link
          to={`/category/${category_id}`}
          className="btn btn-secondary rounded-none"
        >
          {' '}
          <FaArrowLeft></FaArrowLeft> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetalsCard;
