import { CiBookmark } from 'react-icons/ci';
import { CiShare2 } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
const NewsCard = ({ news }) => {
  const {
    image_url,
    details,
    thumbnail_url,
    tags,
    rating,
    title,
    total_view,
    author,
  } = news;
  const formatedDate = new Date(author.published_date).toLocaleDateString();
  //  "author": {
  //     "name": "Shirin Akter",
  //     "published_date": "2025-04-22T17:00:00.000Z",
  //     "img": "https://randomuser.me/api/portraits/women/29.jpg"
  //   },
  return (
    <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex items-center justify-between p-3 bg-base-200">
        <div className="flex items-center space-x-2">
          <img
            src={author.img}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none">
              {author.name}
            </h2>
            <span className="inline-block text-xs leading-none dark:text-gray-600">
              {formatedDate}
            </span>
          </div>
        </div>
        <div></div>
        <div title="Open options" type="button" className="flex gap-2">
          <CiBookmark></CiBookmark>
          <CiShare2></CiShare2>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold p-2 text-accent hover:underline cursor-pointer">
          {title}
        </h1>
      </div>
      <img
        src={image_url}
        alt=""
        className="object-cover object-center w-full my-4 px-2 rounded-xl"
      />
      <div className="p-2 text-primary">
        <h2>
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-primary font-semibold cursor-pointer hover:underline">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </h2>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center flex-row gap-2">
              <img
                className="w-6"
                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                alt=""
              />
              <img
                className="w-6"
                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                alt=""
              />
              <img
                className="w-6"
                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                alt=""
              />
              <img
                className="w-6"
                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                alt=""
              />
              <img
                className="w-6"
                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                alt=""
              />
              <p className="px-2">{rating.number}</p>
            </div>
          </div>
          <button className='flex items-center gap-2'>
            <IoEyeOutline></IoEyeOutline>
            {total_view}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
